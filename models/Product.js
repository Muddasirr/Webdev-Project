const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    ProductId:  String,
        name: String,
    price: Number,







})

const Order = mongoose.model('Product', productSchema); 
module.exports = Order;