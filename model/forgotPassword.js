var mongoose = require('mongoose');
var candidatesSchema = require('../schemas');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var nodemailer = require('nodemailer');
var randtoken = require('rand-token');
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secureConnection: true,
  port: 465,
  auth: {
    user: "harithamadhav111@gmail.com",
    pass: "harithamadhav111"
  }
});
var send = function(body, req, callback) {
  var emailError = '';
  var token = randtoken.generate(16);
  if (body.email === '') {
    emailError = "Cannot be null";
  }
  registeredUser.update({
    'Email': body.email
  }, {
    'Token': token
  }, function(err, tokenInsert) {
    if (tokenInsert.n === 1) {
      var mailOptions = {
        from: '"Admin " <Admin@inc.com>',
        to: body.email,
        subject: 'Reset password ',
        text: 'Click the link to reset password http://10.4.3.134:3000/#/reset-password/' + token
      };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          return console.log(error);
        }
      });
      callback({
        msg: "token created",
        emailError: "",
        successMsg: "Reset link sent"
      })
    }
    if (tokenInsert.n === 0) {
      callback({
        msg: "failed",
        emailError: "email address not registered",
        successMsg: ""
      });
    }
  });
}
var operations = {
  send: send
};
module.exports = operations;