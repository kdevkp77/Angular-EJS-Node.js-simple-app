var mongoose = require('mongoose');
var pbkdf2 = require('pbkdf2-sha256');
var candidatesSchema = require('../schemas');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var applicationSchema = require('../schemas');
var application = mongoose.model('ids', applicationSchema.application);
var deleteAccount = function(body, req, callback) {
  var fetchEmail = req.cookies.loginCookie;
  registeredUser.remove({
    'Email': fetchEmail
  }, function(err, user) {
    if (!err) {
      application.remove({
        'Email': fetchEmail
      }, function(error, application) {
        if (!error) {
          callback({
            msg: "success"
          });
        }
        return;
      });
    }
  });
}
var operations = {
  deleteAccount: deleteAccount
};
module.exports = operations;