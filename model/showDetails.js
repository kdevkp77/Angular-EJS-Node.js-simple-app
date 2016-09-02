var mongoose = require('mongoose');
var jobDetailsSchema = require('../schemas');
var addJob = mongoose.model('JobDetails', jobDetailsSchema.jobDetails);
var applicationSchema = require('../schemas');
var application = mongoose.model('ids', applicationSchema.application);
var getData = function(id, req, callback) {
  var email = req.cookies.loginCookie;
  addJob.findOne({
    'CompanyId': id
  }, function(err, addJob) {
    if (!err) {
      callback({
        msg1: addJob.Post,
        msg2: addJob.CompanyName,
        msg3: addJob.QualitiesRequired,
        msg4: addJob.Bond,
        msg5: addJob.SalaryPackage,
        msg6: email,
        msg7: id
      });
    }
  });
}
var operations = {
  getData: getData
};
module.exports = operations;