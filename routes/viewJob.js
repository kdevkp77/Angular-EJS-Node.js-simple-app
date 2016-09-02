var express = require('express');
var router = express.Router();
var viewJob = require('../controller');
router.get('/', function(req, res) {
  var job = req.cookies.editJobCookie;
  if (job === 'editJob') {
    res.render('viewJob', {
      companyError: '',
      postError: ''
    });
  } else {
    setTimeout(function() {
      res.redirect('./login');
    }, 5000);
  }
});
router.post('/', viewJob.viewJob);
module.exports = router;