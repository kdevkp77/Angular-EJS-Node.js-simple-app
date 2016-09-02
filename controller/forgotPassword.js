var bodySend = require('../model');

function forgotPassword(req, res) {
  var body = req.body;
  bodySend.forgotPassword.send(body, req, function(response) {
    if (response.msg === "token created") {
      res.json({
        emailError: response.emailError,
        successMsg: response.successMsg
      });
    }
    if (response.msg === "failed") {
      res.json({
        emailError: response.emailError,
        successMsg: response.successMsg
      });
    }
  });
}
module.exports = forgotPassword;