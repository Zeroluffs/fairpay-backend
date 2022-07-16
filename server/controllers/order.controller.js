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
  const ordersInGroup = await TableGroup
    .findById(req.params.id)
    .populate("orders");
  let orders = await ordersInGroup.orders;
  res.json(orders);
};

module.exports = orderCtrl;
