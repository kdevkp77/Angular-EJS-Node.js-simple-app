var express = require('express');
var router = express.Router();
var forgotPassword = require('../controller');
router.post('/', forgotPassword.forgotPassword);
module.exports = router; 