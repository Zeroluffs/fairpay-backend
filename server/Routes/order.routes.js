const express = require("express");
const router = express.Router();

const order = require("../controllers/order.controller");

router.post("/:id", order.addOrder);
router.get("/bill/:id", order.getBilling);

module.exports = router;
