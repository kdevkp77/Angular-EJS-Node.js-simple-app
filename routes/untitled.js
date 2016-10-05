var express = require('express');
var router = express.Router();
const search = require('../controller');
const login = require('./login');
const signUp = require('./signUp');
const jobAdd = require('./jobAdd');
const candidates = require('./candidates');
const job = require('./job');
const guest = require('./guest');
const company = require('./company');
const candidatesList = require('./candidatesList');
const changePassword = require('./changePassword');
const viewProfile = require('./viewProfile');
const deleteAccount = require('./deleteAccount');
const deleteJob = require('./deleteJob');
const viewJob = require('./viewJob');
const updateJob = require('./updateJob');
const admin = require('./admin');
const availableJobs = require('./availableJobs'); 
const forgotPassword = require('./forgotPassword');
const resetPassword = require('./resetPassword');
router.get('/', function(req, res) {
  var type = req.cookies.addJobCookie;
  var name = req.cookies.candidatesListCookie;
  var job = req.cookies.editJobCookie;
  var email = req.cookies.loginCookie;
  if (email != '') {
    res.clearCookie('loginCookie');
  }
  if (type === 'jobAdd') {
    res.clearCookie('addJobCookie');
  }
  if (name === 'candidatesList') {
    res.clearCookie('candidatesListCookie');
  }
  if (job === 'editJob') {
    res.clearCookie('editJobCookie');
  }
  res.render('index');
});
router.use('/login', login);
router.use('/sign-up', signUp);
router.use('/job-add', jobAdd);
router.use('/candidates', candidates);
router.use('/guest', guest);
router.use('/company', company);
router.use('/change-password', changePassword);
router.use('/view-profile', viewProfile);
router.use('/candidates-list', candidatesList);
router.use('/delete-account', deleteAccount);
router.use('/delete-job', deleteJob);
router.use('/view-job', viewJob);
router.use('/update-job', updateJob);
router.use('/job',job);
router.use('/admin',admin);
router.use('/available-jobs',availableJobs);
router.use('/forgot-password',forgotPassword);
router.use('/reset-password',resetPassword);
router.post('/', search.search);
module.exports = router;