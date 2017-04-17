"use strict";
var express = require("express");
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "arvidsonmatthew@gmail.com",
        pass: process.env.EMAIL_KEY
    }
});
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/contact', function (req, res, next) {
    var data = req.body;
    transporter.sendMail({
        from: data.email,
        to: 'mattdavida@outlook.com',
        subject: data.name + " reached out through your profile page",
        text: "Hi, " + "\n" + data.comments + "\n" + "Email: " + data.email + "\n" + "Phone: " + data.number
    });
    res.json(data);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
