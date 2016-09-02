var bodySend = require('../model');

function loginDetails(req, res) {
  var body = req.body;
  bodySend.candidates.check(body, function(response) {
    if (response.msg1 === "name") {
      var nameArray = JSON.parse(response.msg2);
      var phnoArray = JSON.parse(response.msg3);
      var locationArray = JSON.parse(response.msg4);
      var privilageArray = JSON.parse(response.msg5);
      var ExperienceArray = JSON.parse(response.msg6);
      var genderArray = JSON.parse(response.msg7);
      var resumeArray = JSON.parse(response.msg8);
      res.json({
        name: nameArray,
        phno: phnoArray,
        location: locationArray,
        privilage: privilageArray,
        experience: ExperienceArray,
        gender: genderArray,
        resume: resumeArray
      });
    } else {
      res.json({
        companyError: response.msg1,
        postError: response.msg2
      });
    }
  });
}
module.exports = loginDetails;