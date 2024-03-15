const mongoose=require('mongoose');

const SuperAdminSchema = new mongoose.Schema({
    AdminId: String,
    BranchId: String,
    name: String,   
    email: String,  
    phone: String,  








})
const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminSchema);
module.exports = SuperAdmin;