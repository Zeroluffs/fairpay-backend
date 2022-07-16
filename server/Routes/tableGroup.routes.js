const express = require("express");
const router = express.Router();

const tableGroup = require("../controllers/tableGroup.controller");

router.get("/", tableGroup.getAllGroups);

module.exports = router;
