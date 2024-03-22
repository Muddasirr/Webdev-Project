const bcrypt = require("bcrypt");
var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken")
const admin = require("../models/Admin")
const cashier = require("../models/Cashier")
const supplier = require("../models/Supplier")
const SuperAdmin = require("../models/SuperAdmin")
//router.get('/signup', (req,res)=>{
    //res.render('signup')

//})



//router.get('/' , (req,res)=>{
//res.render('login')

//})


router.post('/adminlogin', async (req, res) => {
try {
    const { name, password } = req.body;

    const user = await admin.findOne({ name: req.body.name });
    if (!user) {
        return res.json({ msg: "USER NOT FOUND" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        return res.json({ msg: "WRONG PASSWORD" });
    }

    const token = jwt.sign({
        name,
        createdAt: new Date(),
        admin: user.admin,
    }, "MY_SECRET", { expiresIn: "1d" });

    return res.json({
        msg: "LOGGED IN", token
    });
} catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "SERVER ERROR" });
}
});



router.post('/cashierlogin', async (req, res) => {
    try {
        const { name, password } = req.body;
    
        const user = await cashier.findOne({ name: req.body.name });
        console.log(user);
        if (!user) {
            return res.json({ msg: "USER NOT FOUND" });
        }
    
        //const passwordCheck = await bcrypt.compare(password, user.password);
        //if (!passwordCheck) {
            //return res.json({ msg: "WRONG PASSWORD" });
        //}
    
        const token = jwt.sign({
            name,
            createdAt: new Date(),
            admin: user.admin,
        }, "MY_SECRET", { expiresIn: "1d" });
    
        return res.json({
            msg: "LOGGED IN", token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "SERVER ERROR" });
    }
    });


    router.post('/supplierlogin', async (req, res) => {
        try {
            const { name, password } = req.body;
        
            const user = await supplier.findOne({ name: req.body.name });
            if (!user) {
                return res.json({ msg: "USER NOT FOUND" });
            }
        
            const passwordCheck = await bcrypt.compare(password, user.password);
            if (!passwordCheck) {
                return res.json({ msg: "WRONG PASSWORD" });
            }
        
            const token = jwt.sign({
                name,
                createdAt: new Date(),
                admin: user.admin,
            }, "MY_SECRET", { expiresIn: "1d" });
        
            return res.json({
                msg: "LOGGED IN", token
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "SERVER ERROR" });
        }
        });



        router.post('/superadminlogin', async (req, res) => {
            try {
                const { name, password } = req.body;
            
                const user = await SuperAdmin.findOne({ name: req.body.name });
                if (!user) {
                    return res.json({ msg: "USER NOT FOUND" });
                }
            
                const passwordCheck = await bcrypt.compare(password, user.password);
                if (!passwordCheck) {
                    return res.json({ msg: "WRONG PASSWORD" });
                }
            
                const token = jwt.sign({
                    name,
                    createdAt: new Date(),
                    admin: user.admin,
                }, "MY_SECRET", { expiresIn: "1d" });
            
                return res.json({
                    msg: "LOGGED IN", token
                });
            } catch (error) {
                console.error(error);
                return res.status(500).json({ msg: "SERVER ERROR" });
            }
            });


/*router.post('/signup', async (req, res) => {
try {
    const checking = await collection.findOne({ name: req.body.name });

    if (checking) {
        // User already exists
        return res.send("User details already exist");
    }

    // User doesn't exist, insert data into MongoDB
    const newUser = new collection({
        name: req.body.name,
        password: await bcrypt.hash(req.body.password, 3)
    });
    
    // Validation for the 'name' field
    const nameRegex = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/;
    if (!nameRegex.test(newUser.name)) {
        // Handle validation error, for example, send an error response
        return res.status(400).json({ error: "Name must contain one uppercase letter and a special character." });
    }
    
    // Continue with the rest of your code if validation passes
    // ...
    
    

    await newUser.save();
    return res.json({ msg: "CREATED" })

} catch (error) {
    // Handle errors more gracefully
    console.error(error);
    res.status(500).send("Internal Server Error");
}
});
*/


module.exports = router