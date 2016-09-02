var mongoose = require('mongoose');
var pbkdf2 = require('pbkdf2-sha256');
var candidatesSchema = require('../schemas');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phExp = /\d{10}/;
var insert = function(body, req, callback) {
  body.phoneNo = body.phoneNo.replace(/-/g, "");
  var privlg = body.privilage;
  if (body.gender === 'male') {
    var sex = 'male';
    var genderError = '';
  }
  if (body.gender === 'female') {
    var sex = 'female';
    var genderError = '';
  }
  if (body.confirmPassword === '') {
    var confirmError = 'required';
  }
  if (body.password != body.confirmPassword) {
    var confirmError = 'Password not matching';
  }
  var hashPasswd = null;
  if (body.password !== '') {
    var key = body.password;
    var salt = 'salt';
    var res = pbkdf2(key, salt, 1, 32);
    hashPasswd = res.toString('hex');
  }
  if (!req.hasOwnProperty('file')) {
    var resumeError = 'required';
  } else {
    var vpath = req.file.filename;
    var resumeError = '';
  }
  var newUser = new registeredUser({
    Name: body.fname,
    Email: body.email,
    Password: hashPasswd,
    MobileNo: body.phoneNo,
    Location: body.address,
    Privilage: privlg,
    WorkExperience: body.workExperience,
    Gender: sex,
    Resume: vpath
  });
  var passwordLen = body.password.length;
  newUser.save(function(err, newUser) {
    if (err) {
      if (err.name === 'MongoError') {
        var nameError = '';
        var emailError = 'Already used email';
        var passwordError = '';
        var phNoError = '';
        var locationError = '';
        var privilageError = '';
        var genderError = '';
        resumeError = '';
        var confirmError = '';
      } else {
        if (err.errors.hasOwnProperty('Name')) {
          var nameError = err.errors.Name.kind;
        } else {
          var nameError = '';
        }
        if (err.errors.hasOwnProperty('Email')) {
          var emailError = err.errors.Email.kind;
        } else if (!validEmail.test(body.email)) {
          var emailError = 'Email is invalid';
        } else {
          var emailError = '';
        }
        if (err.errors.hasOwnProperty('Password')) {
          var passwordError = err.errors.Password.kind;
        } else if (passwordLen < 8 && passwordLen != 0) {
          var passwordError = 'Password is too short';
        } else {
          var passwordError = '';
        }
        if (err.errors.hasOwnProperty('MobileNo')) {
          var phNoError = err.errors.MobileNo.kind;
        } else if (!phExp.test(body.phoneNo)) {
          var phNoError = 'Enter valid MobileNo';
        } else {
          var phNoError = '';
        }
        if (err.errors.hasOwnProperty('Location')) {
          var locationError = err.errors.Location.kind;
        } else {
          var locationError = '';
        }
        if (err.errors.hasOwnProperty('Privilage')) {
          var privilageError = err.errors.Privilage.kind;
        } else {
          var privilageError = '';
        }
        if (err.errors.hasOwnProperty('Gender')) {
          var genderError = err.errors.Gender.kind;
        } else {
          var genderError = '';
        }
        if (body.confirmPassword === '') {
          var confirmError = 'required';
        }
        if (body.password != body.confirmPassword) {
          var confirmError = 'Password not matching';
        }
      }
      callback({
        msg1: nameError,
        msg2: emailError,
        msg3: passwordError,
        msg4: phNoError,
        msg5: locationError,
        msg6: privilageError,
        msg7: genderError,
        msg8: resumeError,
        msg9: confirmError,
        userIdentificationMsg: "failed"
      });
    } else {
      callback({
        userIdentificationMsg: "success"
      });
    }
  });
}
var operations = {
  insert: insert
};
module.exports = operations;