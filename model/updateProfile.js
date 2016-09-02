var mongoose = require('mongoose');
var pbkdf2 = require('pbkdf2-sha256');
var candidatesSchema = require('../schemas');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var update = function(body, req, callback) {
  var fetchEmail = req.cookies.loginCookie;
  registeredUser.findOne({
    'Email': fetchEmail
  }, function(err, fileFetch) {
    if (!err) {
      var vpath = fileFetch.Resume;
    }
    if (req.hasOwnProperty('file')) {
      var vpath = req.file.filename;
      var fileError = "";
    }
    if (body.fname === "") {
      var nameError = "required";
    } else {
      var nameError = "";
    }
    if (body.phoneNo === "") {
      var phNoError = "required";
    } else {
      var phNoError = "";
    }
    if (body.address === "") {
      var addressError = "required";
    } else {
      var addressError = "";
    }
    if (body.privilage === "") {
      var privilageError = "required";
    } else {
      if (body.privilage != "fresher" && body.privilage != "professional") {
        var privilageError = "invalid";
      } else {
        var privilageError = "";
      }
    }
    if (body.gender === "") {
      var genderError = "required";
    } else {
      if (body.gender != "male" && body.gender != "female") {
        var genderError = "invalid";
      } else {
        var genderError = "";
      }
    }
    if (body.fname != "" && body.phoneNo != "" && body.address != "" && body.privilage != "" && (body.privilage === "fresher" || body.privilage === "professional") && body.gender != "" && (body.gender === "male" || body.gender != "female")) {
      registeredUser.update({
        'Email': fetchEmail
      }, {
        'Name': body.fname,
        'MobileNo': body.phoneNo,
        'Location': body.address,
        'Privilage': body.privilage,
        'WorkExperience': body.workExperience,
        'Gender': body.gender,
        'Resume': vpath
      }, null, function(err, noOfRows) {
        callback({
          msg: "success"
        });
      })
    } else {
      callback({
        msg1: nameError,
        msg2: phNoError,
        msg3: addressError,
        msg4: privilageError,
        msg5: genderError,
        msg6: fileError,
        msg7: req.body.fname,
        msg8: req.body.phoneNo,
        msg9: req.body.address,
        msg10: req.body.privilage,
        msg11: req.body.gender,
        msg12: req.body.workExperience,
        msg: "failed"
      })
    }
  });
}
var operations = {
  update: update
};
module.exports = operations;