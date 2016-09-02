var express = require('express');
var router = express.Router();
var controller = require('../controller');
router.get('/:id', function(req, res) {
  controller.deleteJob.deleteJob(req, res);
});
module.exports = router; 