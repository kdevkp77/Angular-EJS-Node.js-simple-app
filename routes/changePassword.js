var express = require('express');
var router = express.Router();
var controller = require('../controller');
router.get('/', function(req, res) {
  res.render('changePassword', {
    passwordError: '',
    newError: '',
    confirmError: '',
    successMsg: ''
  });
});
router.post('/', controller.changePassword)
module.exports = router;