var express = require('express');
var router = express.Router();
var loginDetails = require('../controller');
router.get('/', function(req, res) {
  var type = req.cookies.addJobCookie;
  var name = req.cookies.candidatesListCookie;
  var job = req.cookies.editJobCookie;
  var email = req.cookies.loginCookie;
  if (email != '') {
    res.clearCookie('loginCookie');
  }
  if (type === 'jobAdd') {
    res.clearCookie('addJobCookie');
  }
  if (name === 'candidatesList') {
    res.clearCookie('candidatesListCookie');
  }
  if (job === 'editJob') {
    res.clearCookie('editJobCookie');
  }
  res.render('login', {
    emailError: '',
    passwordError: ''
  });
});
router.post('/', loginDetails.loginDetails);
module.exports = router;