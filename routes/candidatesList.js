var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
  res.render('candidatesList',{
    name: '',
    phno: '',
    location: '',
    privilage: '',
    experience: '',
    gender: '',
    resume: ''    
  });
});
module.exports = router;