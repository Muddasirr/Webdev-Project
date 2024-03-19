const express = require('express');
const router = express.Router();
//const jwt = require("jsonwebtoken")

const productRouter = require("./product_index");
const orderouter = require("./order_index");
router.use("/products", productRouter);
router.use("/order", orderouter);

module.exports = router;