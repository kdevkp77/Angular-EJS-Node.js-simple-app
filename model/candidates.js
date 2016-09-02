var mongoose = require('mongoose');
var jobDetailsSchema = require('../schemas');
var addJob = mongoose.model('JobDetails', jobDetailsSchema.jobDetails);
var applicationSchema = require('../schemas');
var application = mongoose.model('ids', applicationSchema.application);
var candidatesSchema = require('../schemas');
var registeredUser = mongoose.model('users', candidatesSchema.candidates);
var check = function(body, callback) {
  if (body.company === "") {
    var companyError = 'Company name required';
  } else {
    var companyError = '';
  }
  if (body.post === "") {
    var postError = 'Post should specify';
  } else {
    var postError = '';
  }
  var Company = body.company;
  var Post = body.post;
  addJob.findOne({
    'CompanyName': body.company,
    'Post': body.post
  }, function(err, addJob) {
    if (addJob === null) {
      callback({
        msg1: companyError,
        msg2: postError
      });
    } else if (addJob != null) {
      application.find({
        'CompanyId': addJob.CompanyId
      }, function(err, applicants) {
        if (applicants.length === 0) {
          callback({
            msg1: '',
            msg2: 'No one registered'
          });
        } else {
          var emails = [];
          var names = [];
          var phno = [];
          var locations = [];
          var privilage = [];
          var workExperience = [];
          var gender = [];
          var resume = [];
          for (var i = 0; i < applicants.length; i++) {
            emails[i] = applicants[i].Email;
          }
          registeredUser.find({
            'Email': {
              $in: emails
            }
          }, function(err, name) {
            for (var i = 0; i < applicants.length; i++) {
              names[i] = name[i].Name;
              phno[i] = name[i].MobileNo;
              locations[i] = name[i].Location;
              privilage[i] = name[i].Privilage;
              workExperience[i] = name[i].WorkExperience;
              gender[i] = name[i].Gender;
              resume[i] = name[i].Resume;
            }
            var serializedName = JSON.stringify(names);
            var serializedPhno = JSON.stringify(phno);
            var serializedLocation = JSON.stringify(locations);
            var serializedPrivilage = JSON.stringify(privilage);
            var serializedExperience = JSON.stringify(workExperience);
            var serializedGender = JSON.stringify(gender);
            var serializedResume = JSON.stringify(resume);
            callback({
              msg1: "name",
              msg2: serializedName,
              msg3: serializedPhno,
              msg4: serializedLocation,
              msg5: serializedPrivilage,
              msg6: serializedExperience,
              msg7: serializedGender,
              msg8: serializedResume
            })
          });
        }
      })
    }
  });
}
var operations = {
  check: check
};
module.exports = operations;