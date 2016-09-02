var mongoose = require('mongoose');
var jobDetailsSchema = require('../schemas');
var addJob = mongoose.model('JobDetails', jobDetailsSchema.jobDetails);
var retrieve = function(body, req, callback) {
  if (req.body.post === '') {
    var Post1 = "";
  } else {
    var Post = req.body.post.toLowerCase();
    var Post1 = ".*" + Post + ".*";
  }
  if (req.body.company === '') {
    var Company1 = "";
  } else {
    var Company = req.body.company.toLowerCase();
    var Company1 = ".*" + Company + ".*";
  }
  var email = "";
  if (Post1 === '' && Company1 === '') {
    callback({
      msg: "not found"
    });
  }
  if (Post1 === '' && Company1 != '') {
    addJob.find({
      'CompanyName': {
        $regex: Company1
      }
    }, function(err, addJob) {
      if (addJob.length == 0) {
        callback({
          msg: "not found"
        });
      } else {
        var id = [];
        var post = [];
        var company = [];
        var responsibilities = [];
        var bond = [];
        var salary = [];
        var jobLength = addJob.length;
        for (var i = 0; i < addJob.length; i++) {
          id[i] = addJob[i].CompanyId;
          post[i] = addJob[i].Post;
          company[i] = addJob[i].CompanyName;
          responsibilities[i] = addJob[i].QualitiesRequired;
          bond[i] = addJob[i].Bond;
          salary[i] = addJob[i].SalaryPackage;
        }
        var serializedPost = JSON.stringify(post);
        var serializedId = JSON.stringify(id);
        var serializedCompany = JSON.stringify(company);
        var serializedResponsibilities = JSON.stringify(responsibilities);
        var serializedBond = JSON.stringify(bond);
        var serializedSalary = JSON.stringify(salary);
        callback({
          msg1: serializedPost,
          msg2: serializedCompany,
          msg3: serializedResponsibilities,
          msg4: serializedBond,
          msg5: serializedSalary,
          msg6: serializedId,
          msg7: email
        });
      }
    });
  }
  if (Company1 === '' && Post1 != '') {
    addJob.find({
      'Post': {
        $regex: Post1
      }
    }, function(err, addJob) {
      if (addJob.length == 0) {
        callback({
          msg: "not found"
        });
      } else {
        var id = [];
        var post = [];
        var company = [];
        var responsibilities = [];
        var bond = [];
        var salary = [];
        var jobLength = addJob.length;
        for (var i = 0; i < addJob.length; i++) {
          id[i] = addJob[i].CompanyId;
          post[i] = addJob[i].Post;
          company[i] = addJob[i].CompanyName;
          responsibilities[i] = addJob[i].QualitiesRequired;
          bond[i] = addJob[i].Bond;
          salary[i] = addJob[i].SalaryPackage;
        }
        var serializedPost = JSON.stringify(post);
        var serializedId = JSON.stringify(id);
        var serializedCompany = JSON.stringify(company);
        var serializedResponsibilities = JSON.stringify(responsibilities);
        var serializedBond = JSON.stringify(bond);
        var serializedSalary = JSON.stringify(salary);
        callback({
          msg1: serializedPost,
          msg2: serializedCompany,
          msg3: serializedResponsibilities,
          msg4: serializedBond,
          msg5: serializedSalary,
          msg6: serializedId,
          msg7: email
        });
      }
    });
  }
  if (Company1 != '' && Post1 != '') {
    addJob.findOne({
      'Post': {
        $regex: Post1
      },
      'CompanyName': {
        $regex: Company1
      }
    }, function(err, addJob) {
      if (addJob === null) {
        callback({
          msg: "not found"
        });
      } else {
        callback({
          msg1: addJob.Post,
          msg2: addJob.CompanyName,
          msg3: addJob.QualitiesRequired,
          msg4: addJob.Bond,
          msg5: addJob.SalaryPackage,
          msg6: addJob.CompanyId,
          msg7: email,
          msg: "found"
        });
      }
    });
  }
}
var operations = {
  retrieve: retrieve
};
module.exports = operations;