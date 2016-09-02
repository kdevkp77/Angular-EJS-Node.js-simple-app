var bodySend = require('../model');

function usersDetails(req, res) {
  var body = JSON.parse(req.body.body);
  bodySend.usersDetails.insert(body, req, function(response) {
    if (response.userIdentificationMsg === "failed") {
      res.json({
        nameError: response.msg1,
        emailError: response.msg2,
        passwordError: response.msg3,
        phNoError: response.msg4,
        locationError: response.msg5,
        privilageError: response.msg6,
        genderError: response.msg7,
        resumeError: response.msg8,
        confirmError: response.msg9,
        msg: 'failed'
      });
    }
    if (response.userIdentificationMsg === "success") {
      res.json({
        msg: 'success' 
      });
    }
  });
}
module.exports = usersDetails;