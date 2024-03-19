const mongoose=require('mongoose');

const supplierSchema = new mongoose.Schema({
    SupplierId:  String,
    BranchId: String,
    name: String,   
    email: String,  
    phone: String,  
    password:String,

})
const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;




