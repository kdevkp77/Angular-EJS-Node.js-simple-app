var mongoose = require('mongoose');
var pbkdf2 = require('pbkdf2-sha256');
var jobDetailsSchema = require('../schemas');
var addJob = mongoose.model('JobDetails', jobDetailsSchema.jobDetails);
var candidatesSchema = require('../schemas');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var applicationSchema = require('../schemas');
var application = mongoose.model('ids', applicationSchema.application);
var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var check = function(body, callback) {
  var hashPasswd = null;
  if (body.password != '') {
    var password = body.password;
    var salt = 'salt'
    var res = pbkdf2(password, salt, 1, 32);
    hashPasswd = res.toString('hex');
  }
  if (body.email === "") {
    var emailError = 'Email is required';
  } else if (!validEmail.test(body.email)) {
    var emailError = 'Email is invalid';
  } else {
    var emailError = '';
  }
  if (body.password === "") {
    var passwordError = 'Password required';
  } else {
    var passwordError = '';
  }
  var email = body.email;
  registeredUser.findOne({
    'Email': email,
    'Password': hashPasswd
  }, function(err, registeredUser) {
    if (registeredUser === null) {
      callback({
        msg: "Email or password is incorrect"
      });
    } else {
      callback({
        msg1: emailError,
        msg2: passwordError,
        msg3: registeredUser
      });
    }
  });
}
var retrieve = function(body, req, callback) {
  var email = body.email;
  addJob.find(function(err, addJob) {
    var id = [];
    var post = [];
    var company = [];
    var responsibilities = [];
    var bond = [];
    var salary = [];
    var register = [];
    var jobLength = addJob.length;
    for (var i = 0; i < addJob.length; i++) {
      id[i] = addJob[i].CompanyId;
      post[i] = addJob[i].Post;
      company[i] = addJob[i].CompanyName;
      responsibilities[i] = addJob[i].QualitiesRequired;
      bond[i] = addJob[i].Bond;
      salary[i] = addJob[i].SalaryPackage;
    }
    application.find({
      'Email': body.email
    }, function(err, registered) {
      if (!err) {
        for (var k = 0; k < addJob.length; k++) {
          register[k] = "";
        }
        for (var k = 0; k < addJob.length; k++) {
          for (var j = 0; j < registered.length; j++) {
            if (registered[j].CompanyId === id[k]) {
              register[k] = "Registered";
              break;
            }
          }
        }
      } else {
        for (var k = 0; k < addJob.length; k++) {
          register[k] = "";
        }
      }
      var serializedPost = JSON.stringify(post);
      var serializedId = JSON.stringify(id);
      var serializedCompany = JSON.stringify(company);
      var serializedResponsibilities = JSON.stringify(responsibilities);
      var serializedBond = JSON.stringify(bond);
      var serializedSalary = JSON.stringify(salary);
      var serializedRegister = JSON.stringify(register);
      callback({
        msg1: serializedPost,
        msg2: serializedCompany,
        msg3: serializedResponsibilities,
        msg4: serializedBond,
        msg5: serializedSalary,
        msg6: serializedId,
        msg7: email,
        msg8: serializedRegister
      });
    });
  });
}
var operations = {
  check: check,
  retrieve: retrieve
};
module.exports = operations;