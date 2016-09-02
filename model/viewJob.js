var mongoose = require('mongoose'); 
var jobDetailsSchema = require('../schemas');
var addJob = mongoose.model('JobDetails', jobDetailsSchema.jobDetails);
var view = function(body, callback) {
  if (body.company === "") {
    var companyErr = 'Company name required';
  } else {
    var companyErr = '';
  }
  if (body.post === "") {
    var postErr = 'Post should specify';
  } else {
    var postErr = '';
  }
  var Company = body.company;
  var Post = body.post;
  addJob.findOne({
    'CompanyName': body.company,
    'Post': body.post
  }, function(err, addJob) {
    if (addJob === null) {
      callback({
        msg1: companyErr,
        msg2: postErr,
        msg: "failed"
      });
    } else {
      var name = addJob.CompanyName;
      var post = addJob.Post;
      var skill = addJob.QualitiesRequired;
      var salary = addJob.SalaryPackage;
      var bond = addJob.Bond;
      var place = addJob.Place;
      var id = addJob.CompanyId;
      callback({
        msg1: name,
        msg2: post,
        msg3: skill,
        msg4: salary,
        msg5: bond,
        msg6: place,
        msg7: id,
        msg: "success"
      });
    }
  });
}
var operations = {
  view: view
};
module.exports = operations;