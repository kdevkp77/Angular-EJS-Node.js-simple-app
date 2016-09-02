var mongoose = require('mongoose');
var jobDetailsSchema = require('../schemas');
var addJob = mongoose.model('JobDetails', jobDetailsSchema.jobDetails);
var insert = function(body, req, callback) {
  var newJob = new addJob({
    CompanyId: body.id,
    CompanyName: body.company,
    Post: body.post,
    QualitiesRequired: body.responsibilities,
    SalaryPackage: body.salary,
    Bond: body.bond,
    Place: body.place
  });
  newJob.save(function(err, newJob) {
    if (err) {
      if (err.name === 'MongoError') {
        var idError = 'This id is not supported';
        var companyError = '';
        var postError = '';
        var salaryError = '';
        var bondError = '';
        var placeError = '';
      } else {
        if (err.errors.hasOwnProperty('CompanyId')) {
          var idError = err.errors.CompanyId.kind;
        } else {
          var idError = '';
        }
        if (err.errors.hasOwnProperty('CompanyName')) {
          var companyError = err.errors.CompanyName.kind;
        } else {
          var companyError = '';
        }
        if (err.errors.hasOwnProperty('Post')) {
          var postError = err.errors.Post.kind;
        } else {
          var postError = '';
        }
        if (err.errors.hasOwnProperty('SalaryPackage')) {
          var salaryError = err.errors.SalaryPackage.kind;
        } else {
          var salaryError = '';
        }
        if (err.errors.hasOwnProperty('Bond')) {
          var bondError = err.errors.Bond.kind;
        } else {
          var bondError = '';
        }
        if (err.errors.hasOwnProperty('Place')) {
          var placeError = err.errors.Place.kind;
        } else {
          var placeError = '';
        }
      }
      callback({
        msg1: idError,
        msg2: companyError,
        msg3: postError,
        msg4: salaryError,
        msg5: bondError,
        msg6: placeError,
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