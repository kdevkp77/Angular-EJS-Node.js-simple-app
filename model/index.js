var usersDetails = require('./usersDetails');
var loginDetails = require('./loginDetails');
var jobDetails = require('./jobDetails');
var candidates = require('./candidates');
var search = require('./search');
var showDetails = require('./showDetails');
var createApplication = require('./createApplication');
var updateProfile = require('./updateProfile');
var viewProfile = require('./viewProfile');
var changePassword = require('./changePassword');
var deleteAccount = require('./deleteAccount');
var viewJob = require('./viewJob');
var updateJob = require('./updateJob');
var deleteJob = require('./deleteJob');
var forgotPassword = require('./forgotPassword');
var resetPassword = require('./resetPassword');
var userModel = {
  usersDetails: usersDetails,
  loginDetails: loginDetails,
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
  forgotPassword: forgotPassword,
  resetPassword: resetPassword
}
module.exports = userModel;