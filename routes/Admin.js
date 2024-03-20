const Cashier = require('../models/Cashier');
const Supplier = require('../models/Supplier');
const express = require('express');
const router = express.Router();
const jwt=require('jsonwebtoken');
const Orders= require("../models/order")
const Product=require("../models/Product")


router.post('/createEmployee', async (req, res) => {
try {
    if(req.body.type==="cashier"){
        await Cashier.create(req.body);
    return res.status(201).json({ message: "Cashier created successfully" });
    }
        else if(req.body.type==="superadmin"){
            await Supplier.create(req.body);
            return res.status(201).json({ message: "Supplier created successfully" });
        }
} catch (error) {
    return res.status(500).json({ message: error.message });
    
}


})



router.post('/deleteEmployee', async (req, res) => {    
try {
if(req.body.type==="cashier"){
    await Cashier.findOneAndDelete({EmployeeId:req.body.EmployeeId});
    return res.status(200).json({ message: "Cashier deleted successfully" });}
    else if(req.body.type==="supplier"){
        await Supplier.findOneAndDelete({SupplierId:req.body.SupplierId});
    return res.status(200).json({ message: "Supplier deleted successfully" });    
    }



    
} catch (error) {
    console.error(error);
    
}

})

router.get("/getOrders", async (req, res) => {

    try {
        
        const orders = await Orders.find();
        res.json(orders);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    });

    router.post('/deleteOrder', async (req, res) => {
try {
    await Orders.findOneAndDelete({orderId:req.body.orderId});
    res.status(200).json({ message: "Order deleted successfully" });
} catch (error) {
    res.status(500).json({ message: error.message });
}
})

router.post('/updateProduct', async (req, res) => {
try {
  const product=  await Product.find({prod_id:req.body.prod_id});
   if(!product) {return res.status(404).json({ message: "Product not found" });}
   await Product.findOneAndUpdate({prod_id:req.body.prod_id},req.body);
    return res.status(200).json({ message: "Product updated successfully" });
    
} catch (error) {
    
    console.error(error);}})


