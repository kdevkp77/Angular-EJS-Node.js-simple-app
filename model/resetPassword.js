var mongoose = require('mongoose');
var pbkdf2 = require('pbkdf2-sha256');
var candidatesSchema = require('../schemas');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var insert = function(body, callback) {
  var hashPasswd = null;
  var token = body.token;
  if (body.password != '') {
    var password = body.password;
    var salt = 'salt'
    var res = pbkdf2(password, salt, 1, 32);
    hashPasswd = res.toString('hex');
  }
  if (body.password === "") {
    var passwordError = 'Password required';
  } else {
    var passwordError = '';
  }
  registeredUser.update({
    'Token': token
  }, {
    'Password': hashPasswd,
    'Token': ''
  }, null, function(err, tokenSet) {
    if (tokenSet.n === 1) {
      callback({
        passwordError: passwordError,
        successMsg: "Successfully Reset",
        msg: "success"
      });
    }
    if (tokenSet.n === 0) {
      callback({
        passwordError: passwordError,
        successMsg: "",
        msg: "failed"
      });
    }
  });
}
var operations = {
  insert: insert
};
module.exports = operations;