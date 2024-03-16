const mongoose=require('mongoose');

const SuperAdminSchema = new mongoose.Schema({
    SuperAdminId: String,
    
    name: String,   
    email: String,  
    phone: String,  
    password:String,








})
const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminSchema);
module.exports = SuperAdmin;