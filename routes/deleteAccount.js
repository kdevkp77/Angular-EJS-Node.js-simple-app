var express = require('express');
var router = express.Router();
var controller = require('../controller');
router.get('/', function(req, res) {
  controller.deleteAccount.deleteAccount(req, res);
});
module.exports = router;