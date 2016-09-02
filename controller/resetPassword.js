var bodySend = require('../model');

function resetPassword(req, res) {
  var body = req.body;
  bodySend.resetPassword.insert(body, function(response) {
    if (response.msg === "success") {
      res.json({
        passwordError: response.passwordError,
        successMsg: response.successMsg
      });
    }
    if (response.msg === "failed") {
      res.json({
        passwordError: response.passwordError,
        successMsg: response.successMsg
      });
    }
  });
}
module.exports = resetPassword;