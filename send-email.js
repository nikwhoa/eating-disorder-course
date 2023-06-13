"use strict";
const nodemailer = require("nodemailer");


export default async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'norenkonikita@gmail.com',
      pass: 'juxaryggtouvajhk'
    }
  });

  let mailOptions = {
    from: 'norenkonikita@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent: ' + info.response);
    }
  });
};

