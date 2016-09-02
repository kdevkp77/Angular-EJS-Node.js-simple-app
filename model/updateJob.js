var mongoose = require('mongoose');
var jobDetailsSchema = require('../schemas');
var addJob = mongoose.model('JobDetails', jobDetailsSchema.jobDetails);
var update = function(body, req, id, callback) {
  if (body.company === "") {
    var companyError = "required";
  } else {
    var companyError = "";
  }
  if (body.post === "") {
    var postError = "required";
  } else {
    var postError = "";
  }
  if (body.bond === "") {
    var bondError = "required";
  } else {
    var bondError = "";
  }
  if (body.salary === "") {
    var salaryError = "required";
  } else {
    var salaryError = "";
  }
  if (body.place === "") {
    var placeError = "required";
  } else {
    var placeError = "";
  }
  if (body.company != '' && body.post != '' && body.bond != '' && body.salary != '' && body.place != '') {
    addJob.update({
      'CompanyId': body.id
    }, {
      'CompanyName': body.company,
      'Post': body.post,
      'QualitiesRequired': body.responsibilities,
      'SalaryPackage': body.salary,
      'Bond': body.bond,
      'Place': body.place
    }, null, function(err, noOfRows) {
      callback({
        msg: "success"
      });
    })
  } else {
    callback({
      msg1: companyError,
      msg2: postError,
      msg3: bondError,
      msg4: salaryError,
      msg5: placeError,
      msg6: body.company,
      msg7: body.post,
      msg8: body.bond,
      msg9: body.salary,
      msg10: body.place,
      msg11: id,
      msg12: body.responsibilities,
      msg: "failed"
    })
  }
}
var operations = {
  update: update
};
module.exports = operations;