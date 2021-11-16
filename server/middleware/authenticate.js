const jwt = require("jsonwebtoken");

const express = require('express');

const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
    try {

        const token = req.cookie.jwt;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error('User not found')
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();

    } catch (err) {
        res.status(401).send("unauthorized:No token provided");
        console.log(err);
    }
}
module.exports = Authenticate;