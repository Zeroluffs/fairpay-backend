const Order = require("../models/Order");
const TableGroup = require("../models/TableGroup");

const orderCtrl = {};

orderCtrl.addOrder = async (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    products: req.body.products,
    groupID: req.params.id,
  });

  await newOrder.save();

  await TableGroup.findByIdAndUpdate(
    req.params.id,
    { $push: { orders: newOrder } },
    { new: true, useFindAndModify: false }
  );

  res.send(newOrder);
};

orderCtrl.getBilling = async (req, res) => {
  const ordersInGroup = await TableGroup.findById(req.params.id).populate(
    "orders"
  );
  let orders = await ordersInGroup.orders;
  if (orders.length > 0) {
    let totalInOrder = 0;
    orders.forEach((order) => {
      totalInOrder += order.price;
    });
    let amountPerPerson = totalInOrder / orders.length;
    amountPerPerson = parseFloat(amountPerPerson.toFixed(2));
    let amountPerPersonTip = amountPerPerson;
    amountPerPersonTip += amountPerPerson * 0.1;
    amountPerPersonTip = parseFloat(amountPerPersonTip.toFixed(2));
    const bill = {
      amountPerPerson: amountPerPerson,
      amountPerPersonTip: amountPerPersonTip,
    };
    res.json(bill);
  } else {
    res.status(400).send({
      message: "There is no data",
    });
  }
};

module.exports = orderCtrl;
