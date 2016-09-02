var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
  res.render('guest',{
    post: '',
    company: '',
    responsibilities: '',
    bond: '',
    salary: '',
    id: '',
    email: ''
  });
});
module.exports = router;