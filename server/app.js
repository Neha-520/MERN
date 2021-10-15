const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: "./config.env" });
//hv to write only in app.js


require('./db/conn');
// const User = require('./model/userSchema');

//router file linked
app.use(require('./router/auth'));

const PORT = process.env.PORT;


//MiddleWare
const middleware = (req, res, next) => {
    console.log("hello my middleware");
    // next();
}

middleware();

// app.get('/', (req, res) => {
//     res.send("hello world");
// })

app.get('/about', middleware, (req, res) => {
    res.send("hello from about");
})
app.get('/contact', (req, res) => {
    res.send("hello from contact");
})
app.get('/signin', (req, res) => {
    res.send("hello from login");
})
app.get('/signup', (req, res) => {
    res.send("hello from registeration");
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})
