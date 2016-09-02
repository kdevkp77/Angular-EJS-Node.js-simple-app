var express = require('express');
var controller = require('../controller');
var router = express.Router();
router.get('/:id', function(req, res) {
  controller.criteria.criteria(req, res);
});
module.exports = router;