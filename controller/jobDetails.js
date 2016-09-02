var bodySend = require('../model');

function jobDetails(req, res) {
  var body = req.body;
  bodySend.jobDetails.insert(body, req, function(response) {
    if (response.userIdentificationMsg === "failed") {
      res.json({
        idError: response.msg1,
        companyError: response.msg2,
        postError: response.msg3,
        salaryError: response.msg4,
        bondError: response.msg5,
        placeError: response.msg6,
        successMsg: ''
      });
    }
    if (response.userIdentificationMsg === "success") {
      res.json({
        idError: '',
        companyError: '',
        postError: '',
        salaryError: '',
        bondError: '',
        placeError: '',
        successMsg: "Successfully Registered"
      });
    }
  });
}
module.exports = jobDetails;