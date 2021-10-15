const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello world from router");
})

//when we need data
router.post('/register', (req, res) => {
    console.log(req.body);
})

module.exports = router;