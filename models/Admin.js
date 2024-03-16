const mongoose=require('mongoose');

const AdminSchema = new mongoose.Schema({
    AdminId: String,
    BranchId: String,
    name: String,   
    email: String,  
    phone: String,  
    password:String,
    muddasir loru hai









})
const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;