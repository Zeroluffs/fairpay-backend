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
  let orders = ordersInGroup?.orders;

  if (orders.length > 0) {
    let bill = [];
    orders.forEach((order) => {
      let totalAmountPerPerson = 0;
      order.products.forEach((product) => {
        totalAmountPerPerson = totalAmountPerPerson + product.price;
      });
      let totalAmountPerPersonTip = totalAmountPerPerson;
      totalAmountPerPersonTip += totalAmountPerPersonTip * 0.1;
      const objectBill = {
        name: order.name,
        totalAmountPerPerson: totalAmountPerPerson,
        totalAmountPerPersonTip: totalAmountPerPersonTip,
      };

      bill.push(objectBill);
    });
    res.json(bill);
  } else {
    res.status(400).send({
      message: "There is no data",
    });
  }
};

module.exports = orderCtrl;
