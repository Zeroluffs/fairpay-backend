const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    name: { type: String, required: true },
    product: { type: String, required: true },
    price: { type: String, required: true },
    groupID: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
