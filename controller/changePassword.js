var bodySend = require('../model');

function changePassword(req, res) {
  var body = req.body;
  bodySend.changePassword.change(body, req, res, function(response) {
    if (response.msg === "success") {
      res.json({
        successMsg: "Password changed",
        passwordError: '',
        newError: '',
        confirmError: '',
        msg: response.msg
      });
    }
    if (response.msg === "failed") {
      res.json({
        passwordError: response.msg1,
        newError: response.msg2,
        confirmError: response.msg3,
        successMsg: '',
        msg: response.msg
      });
    }
    if (response.msg === "error") {
      res.json({
        passwordError: response.msg1,
        newError: response.msg2,
        confirmError: response.msg3,
        successMsg: '',
        msg: response.msg
      });
    }
  });
}
module.exports = changePassword;