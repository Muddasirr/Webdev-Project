const mongoose = require('mongoose');
const Product = require('./Product'); // Import the Product model

const OrderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    products: [{
        productname: {type: string, ref: 'Product', required: true},
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }],
    createdAt: { type: Date, default: Date.now }
});

// Pre-save middleware to manage stock
OrderSchema.pre('save', async function(next) {
    try {
        // Update product quantities
        await Promise.all(this.products.map(async product => {
            const { productname, productId, quantity } = product;
            const foundProduct = await Product.findById(productId);
            if (!foundProduct) throw new Error(`Product with ID ${productId} not found`);
            const foundProduct_name = await Product.findById(productname);
            if (!foundProduct_name) throw new Error(`Product with ID ${productname} not found`);
            if (foundProduct.quantity < quantity) throw new Error(`Insufficient stock for product ${foundProduct.name}`);

            // Reduce product quantity
            foundProduct.quantity -= quantity;
            await foundProduct.save();
        }));

        next();
    } catch (error) {
        next(error);
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
