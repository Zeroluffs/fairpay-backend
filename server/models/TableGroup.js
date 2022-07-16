const mongoose = require("mongoose");
const { Schema } = mongoose;

const TableGroupSchema = new Schema(
  {
    id: Number,
    name: String,
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TableGroup", TableGroupSchema);
