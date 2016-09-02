var bodySend = require('../model');

function deleteAccount(req, res) {
  var body = req.body;
  bodySend.deleteAccount.deleteAccount(body, req, function(response) {
    if (response.msg === "success") {
      res.json({
        msg: response.msg
      });
    }
  });
}
module.exports = {
  deleteAccount: deleteAccount
};