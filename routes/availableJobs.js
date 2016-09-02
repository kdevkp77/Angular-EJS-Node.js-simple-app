var express = require('express');
var controller = require('../controller');
var router = express.Router();
router.get('/', function(req, res) {
  controller.availableJobs.availableJobs(req, res);
});
module.exports = router;