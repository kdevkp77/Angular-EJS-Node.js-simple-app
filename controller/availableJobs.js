var bodySend = require('../model');
var admin = require('../routes/admin');

function availableJobs(req, res) {
  var body = req.body;
  bodySend.loginDetails.retrieve(body, req, function(response) {
    var postArray = JSON.parse(response.msg1);
    var companyArray = JSON.parse(response.msg2);
    var responsibilitiesArray = JSON.parse(response.msg3);
    var bondArray = JSON.parse(response.msg4);
    var salaryArray = JSON.parse(response.msg5);
    var idArray = JSON.parse(response.msg6);
    res.json({
      post: postArray,
      company: companyArray,
      responsibilities: responsibilitiesArray,
      bond: bondArray,
      salary: salaryArray,
      id: idArray,
      email: response.msg7,
      link: 'Logout'
    });
  });
}
module.exports = {
  availableJobs: availableJobs
};