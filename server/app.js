const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = 'mongodb+srv://neha:neha@2001@cluster0.i8fqb.mongodb.net/mernstack?retryWrites=true&w=majority'


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("connected succesfully");
}).catch((err) => console.log(err));


//MiddleWare
const middleware = (req, res, next) => {
    console.log("hello my middleware");
    // next();
}

middleware();

app.get('/', (req, res) => {
    res.send("hello world");
})
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

app.listen(3000, () => {
    console.log('server is running at port 3000');
})
