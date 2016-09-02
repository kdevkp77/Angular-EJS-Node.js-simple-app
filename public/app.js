var myapp = angular.module('jobPortal', ['ngRoute','ngCookies','ui.bootstrap']);  

myapp.config(function ($routeProvider) {
   $routeProvider
    .when('/',
      {
        controller: 'simpleController',
        templateUrl: '/views/index.html'
      })
    .when('/login',
      {
        controller: 'loginController',
        templateUrl: '/views/login.html'
      })
    .when('/sign-up',
      {
        controller: 'signUpController',
        templateUrl: '/views/signUp.html'
      })
    .when('/job',
      {
        controller: 'jobController',
        templateUrl: '/views/job.html'
      })
    .when('/guest',
      {
        controller: 'guestController',
        templateUrl: '/views/guest.html'
      })
    .when('/company/:id/:link',
      {
        controller: 'companyController',
        templateUrl: '/views/company.html'
      })
    .when('/view-profile',
      {
        controller: 'profileController',
        templateUrl: '/views/updateProfile.html'
      })
    .when('/admin',
      {
        controller: 'adminController',
        templateUrl: '/views/admin.html'
      })
    .when('/job-add',
      {
        controller: 'jobAddController',
        templateUrl: '/views/jobAdd.html'
      })
    .when('/candidates',
      {
        controller: 'candidateController',
        templateUrl: '/views/candidates.html'
      })
    .when('/view-job',
      {
        controller: 'jobViewController', 
        templateUrl: '/views/viewJob.html'
      })
    .when('/available-jobs',
      {
        controller: 'availableJobController',
        templateUrl: '/views/availableJobs.html'
      })
    .when('/candidates-list',
      {
        controller: 'candidatesListController',
        templateUrl: '/views/candidatesList.html'
      })
    .when('/update-job',
      {
        controller: 'updateJobController',
        templateUrl: '/views/updateJob.html'
      })
    .when('/delete-job/:id',
      {
        controller: 'deleteJobController',
        templateUrl: '/views/updateJob.html'
      })
    .when('/delete-account',
      {
        controller: 'deleteAccountController',
        templateUrl: '/views/updateProfile.html'
      })
    .when('/change-password',
      {
        controller: 'changePasswordController',
        templateUrl: '/views/changePassword.html'
      })
    .when('/forgot-password',
      {
        controller: 'forgotPasswordController',
        templateUrl: '/views/forgotPassword.html'
      })
    .when('/reset-password/:token',
      {
        controller: 'resetPasswordController',
        templateUrl: '/views/resetPassword.html'
      });

})