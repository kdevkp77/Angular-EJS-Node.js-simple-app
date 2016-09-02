var express = require('express');
var controller = require('../controller');
var router = express.Router();
router.get('/:id/:link', function(req, res) {
  controller.showDetails.showDetails(req, res);
});
router.post('/:id', controller.createApplication); 
module.exports = router;