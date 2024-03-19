const mongoose = require("mongoose");
const productschema =  mongoose.Schema({
    //prod_id: {
        //type: mongoose.Schema.Types.ObjectId,
       // default: mongoose.Types.ObjectId
    //},
    prod_id: { type: String, unique: true },
    Prodcut_name: String,
    Product_Brand: String, 
    quantity: Number,
    price: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

let lastUsedId = 200;
productschema.pre('save', function (next) {
  if (!this.prod_id) {
      lastUsedId++;
      this.prod_id = 'P' + lastUsedId;
  }
  next();
});



const product_collect = mongoose.model('product_collect', productschema);

module.exports = product_collect;