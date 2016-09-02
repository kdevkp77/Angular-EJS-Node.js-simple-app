var bodySend = require('../model');

function viewJob(req, res) {
  var body = req.body;
  bodySend.viewJob.view(body, function(response) {
    if (response.msg === "success") {
      res.json({
        name: response.msg1,
        post: response.msg2,
        skill: response.msg3,
        salary: response.msg4,
        bond: response.msg5,
        place: response.msg6,
        id: response.msg7,
        companyError: '',
        postError: '',
        bondError: '',
        salaryError: '',
        placeError: '',
        successMsg: ''
      });
    } else {
      res.json({
        companyErr: response.msg1,
        postErr: response.msg2
      });
    }
  });
}
module.exports = viewJob;