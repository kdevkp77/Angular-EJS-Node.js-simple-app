var loginDetails = require('./loginDetails');
var usersDetails = require('./usersDetails');
var jobDetails = require('./jobDetails');
var candidates = require('./candidates');
var showDetails = require('./showDetails');
var createApplication = require('./createApplication');
var search = require('./search');
var updateProfile = require('./updateProfile');
var viewProfile = require('./viewProfile');
var deleteAccount = require('./deleteAccount');
var changePassword = require('./changePassword');
var viewJob = require('./viewJob');
var updateJob = require('./updateJob');
var deleteJob = require('./deleteJob');
var availableJobs = require('./availableJobs');
var forgotPassword = require('./forgotPassword');
var resetPassword = require('./resetPassword');
var appDetails = {
  loginDetails: loginDetails,
  usersDetails: usersDetails,
  jobDetails: jobDetails,
  candidates: candidates,
  search: search,
  showDetails: showDetails,
  createApplication: createApplication,
  updateProfile: updateProfile,
  viewProfile: viewProfile,
  deleteAccount: deleteAccount,
  changePassword: changePassword,
  viewJob: viewJob,
  updateJob: updateJob,
  deleteJob: deleteJob,
  availableJobs: availableJobs,
  forgotPassword: forgotPassword,
  resetPassword: resetPassword
};
module.exports = appDetails;