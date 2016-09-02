var bodySend = require('../model');

function deleteJob(req, res) {
  var id = req.params.id;
  var body = req.body;
  bodySend.deleteJob.deleteJob(body, req, id, function(response) {
    if (response.msg === "success") {
      res.json({
        msg: response.msg
      });
    }
  });
}
module.exports = {
  deleteJob: deleteJob
};