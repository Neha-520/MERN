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

module.exports = router;