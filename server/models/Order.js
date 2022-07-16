const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    name: String,
    product: String,
    price: Number,
    groupID: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
