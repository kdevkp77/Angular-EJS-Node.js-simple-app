var mongoose = require('mongoose');
var applicationSchema = require('../schemas');
var application = mongoose.model('ids', applicationSchema.application);
var jobDetailsSchema = require('../schemas');
var addJob = mongoose.model('JobDetails', jobDetailsSchema.jobDetails);
var insert = function(body, req, id, callback) {
  addJob.findOne({
    'CompanyId': id
  }, function(err, addJob) {
    var post = addJob.Post;
    var company = addJob.CompanyName;
    var responsibilities = addJob.QualitiesRequired;
    var bond = addJob.Bond;
    var salary = addJob.SalaryPackage;
    var newApplication = new application({
      Email: body.email,
      CompanyId: body.id
    });
    newApplication.save(function(err, newApplication) {
      if (err) {
        if (err.name === 'MongoError') {
          callback({
            msg1: post,
            msg2: company,
            msg3: responsibilities,
            msg4: bond,
            msg5: salary,
            msg: "reregister"
          });
        } else {
          callback({
            msg1: post,
            msg2: company,
            msg3: responsibilities,
            msg4: bond,
            msg5: salary,
            msg: "failed"
          });
        }
      } else {
        var index = body.datas.id.indexOf(id);
        body.datas.register[index] = "Registered"; 
        callback({
          msg1: post,
          msg2: company,
          msg3: responsibilities,
          msg4: bond,
          msg5: salary,
          msg6: body.datas,
          msg: "success"
        });
      }
    });
  });
}
var remove = function(body, req, id, callback) {
  application.remove({
    'Email': body.email,
    'CompanyId': id
  }, function(err, application) {
    addJob.findOne({
      'CompanyId': id
    }, function(err, addJob) {
      if (addJob !== null) {
        var post = addJob.Post;
        var company = addJob.CompanyName;
        var skills = addJob.QualitiesRequired;
        var bond = addJob.Bond;
        var salary = addJob.SalaryPackage;
      }
      if (application.result.n === 1) {
        var index = body.datas.id.indexOf(id);
        body.datas.register[index] = "";
        callback({
          msg1: "executed",
          msg2: "Logout",
          msg3: post,
          msg4: company,
          msg5: skills,
          msg6: bond,
          msg7: salary,
          msg8: body.datas
        });
      }
      if (application.result.n === 0) {
        callback({
          msg1: "failed",
          msg2: "Login",
          msg3: post,
          msg4: company,
          msg5: skills,
          msg6: bond,
          msg7: salary
        });
      }
    });
  });
}
var operations = {
  insert: insert,
  remove: remove
};
module.exports = operations;