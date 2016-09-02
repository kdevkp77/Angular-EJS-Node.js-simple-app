var mongoose = require('mongoose');
var pbkdf2 = require('pbkdf2-sha256');
var candidatesSchema = require('../schemas');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var show = function(body, req, callback) {
  var fetchEmail = req.cookies.loginCookie;
  registeredUser.findOne({
    'Email': fetchEmail
  }, function(err, user) {
    if (user === null) {
      callback({
        msg: "failed"
      })
    } else {
      var name = user.Name;
      var phoneNo = user.MobileNo;
      var location = user.Location;
      var privilage = user.Privilage;
      var gender = user.Gender;
      var resume = user.Resume;
      var workExperience = user.WorkExperience;
      callback({
        msg1: name,
        msg2: phoneNo,
        msg3: location,
        msg4: privilage,
        msg5: gender,
        msg6: resume,
        msg7: workExperience,
        msg: "success"
      });
    }
  })
}
var operations = {
  show: show
};
module.exports = operations;