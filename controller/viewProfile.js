var bodySend = require('../model');

function viewProfile(req, res) {
  var body = req.body;
  bodySend.viewProfile.show(body, req, function(response) {
    if (response.msg === "failed") {
      res.json({
        nameError: '',
        emailError: '',
        passwordError: '',
        phNoError: '',
        locationError: '',
        privilageError: '',
        genderError: '',
        resumeError: '',
        confirmError: '',
        msg: response.msg
      });
    } else {
      res.json({
        name: response.msg1,
        phoneNo: response.msg2,
        location: response.msg3,
        privilage: response.msg4,
        gender: response.msg5,
        resume: response.msg6,
        workExperience: response.msg7,
        nameError: '',
        phNoError: '',
        addressError: '',
        privilageError: '',
        genderError: '',
        fileError: '',
        msg: response.msg
      });
    }
  });
}
module.exports = {
  viewProfile: viewProfile
};