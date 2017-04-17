import * as express from 'express';
let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "arvidsonmatthew@gmail.com",
    pass: process.env.EMAIL_KEY
  }
});

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', function(req, res, next) {
  let data = req.body;
  transporter.sendMail({
        from: data.email,
        to: 'mattdavida@outlook.com',
        subject: data.name + " reached out through your profile page",
        text: "Hi, " + "\n" + data.comments + "\n" + "Email: " + data.email + "\n" + "Phone: " + data.number
    });
    res.json(data);
});


export default router;
