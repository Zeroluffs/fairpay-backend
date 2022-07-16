const Order = require("../models/Order");
const TableGroup = require("../models/TableGroup");

const orderCtrl = {};

orderCtrl.addOrder = async (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    product: req.body.product,
    price: req.body.price,
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

  let totalInOrder = 0;
  orders.forEach((order) => {
    totalInOrder += order.price;
  });
  const amountPerPerson = totalInOrder / orders.length;
  let amountPerPersonTip = amountPerPerson;
  amountPerPersonTip += amountPerPerson * 0.1;
  amountPerPersonTip = parseFloat(amountPerPersonTip.toFixed(2));
  const bill = {
    amountPerPerson: amountPerPerson,
    amountPerPersonTip: amountPerPersonTip,
  };
  res.json(bill);
};

module.exports = orderCtrl;
