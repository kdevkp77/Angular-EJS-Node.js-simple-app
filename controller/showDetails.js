bodySend = require('../model');

function showDetails(req, res) {
  var path = req.params.id;
  var link = req.params.link;
  bodySend.showDetails.getData(path, req, function(response) {
    res.json({
      post: response.msg1,
      company: response.msg2,
      responsibilities: response.msg3,
      bond: response.msg4,
      salary: response.msg5,
      email: response.msg6,
      id: response.msg7,
      link: link,
      congratsMsg: '',
      failureMsg: ''
    })
  });
}
module.exports = {
  showDetails: showDetails
};