var express = require('express');
var app = express();
var router = express.Router();
var jobDetails = require('../controller');
router.get('/', function(req, res) {
  var type = req.cookies.addJobCookie;
  if (type === 'jobAdd') {
    res.render('jobAdd', {
      idError: '',
      companyError: '',
      postError: '',
      salaryError: '',
      bondError: '',
      placeError: '',
      successMsg: ''
    });
  } else {
    setTimeout(function() {
      res.redirect('./login');
    }, 5000);
  }
});
router.post('/', jobDetails.jobDetails);
module.exports = router;