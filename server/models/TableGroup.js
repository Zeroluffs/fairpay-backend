const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExpenseSchema = new Schema(
  {
    id: Number,
    name: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TableGroup", ExpenseSchema);
