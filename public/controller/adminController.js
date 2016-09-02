myapp.controller('adminController', ['$scope', '$rootScope', 'jobInfoService', '$location', function($scope, $rootScope, jobInfoService, $location) {
  $rootScope.bodylayout = "bg-image";
  $scope.addNewJob = function() {
    $location.path("/job-add");
  }
  $scope.candidates = function() {
    $location.path("/candidates");
  }
  $scope.edit = function() {
    $location.path("/view-job");
  }
  $scope.jobs = function() {
    $location.path("/available-jobs");
    jobInfoService.show().success(function(data) {
      localStorage.jobInfo = JSON.stringify(data);
    });
  }
}]);