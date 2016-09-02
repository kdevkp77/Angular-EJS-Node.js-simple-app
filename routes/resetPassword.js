var express = require('express');
var controller = require('../controller');
var router = express.Router();
router.post('/', controller.resetPassword);
module.exports = router;