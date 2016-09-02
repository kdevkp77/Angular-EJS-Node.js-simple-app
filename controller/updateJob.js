var bodySend = require('../model');

function updateJob(req, res) {
  var id = req.params.id;
  var body = req.body;
  bodySend.updateJob.update(body, req, id, function(response) {
    if (response.msg === "success") {
      res.json({
        companyError: '',
        postError: '',
        bondError: '',
        salaryError: '',
        placeError: '',
        name: '',
        post: '',
        bond: '',
        salary: '',
        place: '',
        id: '',
        skill: '',
        successMsg: "Successfully Updated"
      });
    } else {
      res.json({
        companyError: response.msg1,
        postError: response.msg2,
        bondError: response.msg3,
        salaryError: response.msg4,
        placeError: response.msg5,
        name: response.msg6,
        post: response.msg7,
        bond: response.msg8,
        salary: response.msg9,
        place: response.msg10,
        id: response.msg11,
        skill: response.msg12,
        successMsg: ''
      });
    }
  });
}
module.exports = updateJob;