const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const { mongoose } = require("./database");
require("dotenv").config({ path: "variables.env" });

//settings

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/tgroup", require("./server/routes/tableGroup.routes"));
app.use("/api/order", require("./server/routes/order.routes"));

//starting server
app.listen(port, () => {
  console.log("Server is Working", port);
});
