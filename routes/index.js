const express = require('express');
const router = express.Router();
//const jwt = require("jsonwebtoken")

const productRouter = require("./product_index");

router.use("/products", productRouter);

module.exports = router;