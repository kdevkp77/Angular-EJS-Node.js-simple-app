var mongoose = require('mongoose');
var jobDetailsSchema = require('../schemas');
var addJob = mongoose.model('JobDetails', jobDetailsSchema.jobDetails);
var deleteJob = function(body, req, id, callback) {
  addJob.remove({
    'CompanyId': id
  }, function(err, user) {
    if (!err) {
      callback({
        msg: "success"
      });
    }
    return;
  });
}
var operations = {
  deleteJob: deleteJob
};
module.exports = operations;