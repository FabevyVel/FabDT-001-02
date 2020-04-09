/* var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'suryavcetece@gmail.com',
    pass: 'Suriya95!'
  }
});

var mailOptions = {
  from: 'suryavcetece@gmail.com',
  to: 'pavithra.v@payoda.com, suriya.t@payoda.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); */



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'suryavcetece@gmail.com',
    pass: 'Suriya95!'
  }
});

var mailOptions = {
  from: 'suryavcetece@gmail.com',
  to: 'suriya.t@payoda.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});