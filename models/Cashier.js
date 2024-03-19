const mongoose=require('mongoose');

const CashierSchema = new mongoose.Schema({
    EmployeeId: String,
    BranchId: String,
    name: String,   
    email: String,  
    phone: String,  
    password:String,
    frrr








})
const Cashier = mongoose.model('Cashier', CashierSchema);
module.exports = Cashier;