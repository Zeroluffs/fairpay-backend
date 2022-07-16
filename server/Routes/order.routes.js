const express = require("express");
const router = express.Router();

const order = require("../controllers/order.controller");

router.post("/:id", order.addOrder);

module.exports = router;
