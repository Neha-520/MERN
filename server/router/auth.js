const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send("hello world from router");
})

//when we need data
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill the fields properly" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        }
        const user = new User({ name, email, phone, work, password, cpassword })

        await user.save();

        res.status(201).json({ message: "user registered succesfully" })

    } catch (err) {
        console.log(err);
    }
    // res.json({ message: req.body });
})


//login route
router.post('/signin', async (req, res) => {
    //  console.log(req.body)
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ error: "Plz Fill the data" })

        const userLogin = await User.findOne({ email: email });
        if (!userLogin)
            res.status(400).json({ error: "user error" });
        else
            res.json({ message: "user signed in successfully" });

    } catch (err) {
        console.log(err);
    }
})



module.exports = router;