var bodySend = require('../model');

function updateProfile(req, res) {
  var body = JSON.parse(req.body.body);
  bodySend.updateProfile.update(body, req, function(response) {
    if (response.msg === "success") {
      res.json({
        msg: response.msg
      });
    } else {
      res.json({
        nameError: response.msg1,
        phNoError: response.msg2,
        addressError: response.msg3,
        privilageError: response.msg4,
        genderError: response.msg5,
        fileError: response.msg6,
        name: response.msg7,
        phoneNo: response.msg8,
        location: response.msg9,
        privilage: response.msg10,
        gender: response.msg11,
        workExperience: response.msg12,
        resume: '',
        msg: response.msg
      });
    }
  });
}
module.exports = updateProfile;