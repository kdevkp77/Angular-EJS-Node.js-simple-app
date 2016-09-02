var express = require('express');
var router = express.Router();
var candidates = require('../controller');
router.get('/', function(req, res) {
  var name = req.cookies.candidatesListCookie;
  if (name === 'candidatesList') {
    res.render('candidates', {
      companyError: '',
      postError: ''
    });
  } else {
    setTimeout(function() {
      res.redirect('./login');
    }, 5000);
  }
});
router.post('/', candidates.candidates);
module.exports = router;