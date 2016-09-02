var mongoose = require('mongoose');
var pbkdf2 = require('pbkdf2-sha256');
var candidatesSchema = require('../schemas');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var change = function(body, req, res, callback) {
  var fetchEmail = req.cookies.loginCookie;
  var currentPassword = body.password;
  var newPassword = body.newPassword;
  var confirmPassword = body.confirmPassword;
  var key = currentPassword;
  var salt = 'salt';
  var res = pbkdf2(key, salt, 1, 32);
  hashPasswd = res.toString('hex');
  var result = pbkdf2(newPassword, salt, 1, 32);
  var newHashedPasswd = result.toString('hex');
  if (currentPassword === "") {
    var passwordError = "required";
  }
  if (newPassword === "") {
    var newError = "required";
  }
  if (confirmPassword === "") {
    var confirmError = "required";
  }
  if (currentPassword.length < 8 && currentPassword.length > 0) {
    var passwordError = "Password is incorrect";
  }
  if (newPassword.length < 8 && newPassword.length > 0) {
    var newError = "Password is incorrect";
  }
  if (newPassword != confirmPassword) {
    var confirmError = "password doesn't match";
  }
  if (currentPassword != "" && newPassword != "" && confirmPassword != "" && newPassword.length >= 8) {
    registeredUser.update({
      'Email': fetchEmail,
      'Password': hashPasswd
    }, {
      'Password': newHashedPasswd
    }, null, function(err, newUser) {
      if (newUser.n === 1) {
        callback({
          msg: "success"
        });
      } else {
        callback({
          msg: "error",
          msg1: "incorrect Password",
          msg2: '',
          msg3: ''
        });
      }
    });
  } else {
    callback({
      msg1: passwordError,
      msg2: newError,
      msg3: confirmError,
      msg: "failed"
    });
  }
}
var operations = {
  change: change
};
module.exports = operations;