var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var Secrets = require('../secrets');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

//Send Email
//put username & password in secrets file
//(see format for secrets.jsx in comments at bottom of this page)
//need application specific password if using gmail.  See link below for details
//https://support.google.com/accounts/answer/185833?hl=en&ctx=ch_DisplayUnlockCaptcha

router.post('/send', function(req, res, next){
  //create reusable transporter
  var transporter = nodemailer.createTransport("SMTP",{
    service: 'Gmail',
    auth: {
      user: Secrets.user,
      pass: Secrets.pass
    }
  });
  var mailOptions = {
    from: 'John Doe <johndoe@outlook.com>',
    to: Secrets.user,
    subject: 'Website Submission',
    text: "You have a new submission with the following details ...Name "+req.body.name+ ' and Email: '+req.body.email+'.  Message: '+req.body.message,
    html: '<p> You have a new submission with the following details</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };

  transporter.sendMail(mailOptions, function(error,info){
    if(error){
      console.log(error);
      res.redirect('/');
    }else{
      console.log('Message Sent'+ info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;

// secrets.js format //
  // module.exports = {
  //   user: 'abc@gmail.com',
  //   pass: '123abc',
  // };
