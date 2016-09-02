var express = require('express');
var router = express.Router();
var controller = require('../controller');
router.get('/', function(req, res) {
  res.render('updateJob',{
    companyError: '',
    postError: '',
    bondError: '',
    salaryError: '',
    placeError: '',
    name: '',
    post: '',
    bond: '',
    salary: '',
    place: '',
    id: '',
    skill: '',
    successMsg: ''
  })
});
router.post('/:id', function(req, res) { 
  controller.updateJob(req, res);
});
module.exports = router;