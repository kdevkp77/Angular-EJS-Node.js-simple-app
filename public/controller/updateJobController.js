myapp.controller('updateJobController', ['$scope', '$rootScope', 'updateJobService', function($scope, $rootScope, updateJobService) {
  $rootScope.bodylayout = "bg-image";
  $scope.jobDetails = JSON.parse(localStorage.updateJob);
  $scope.validateJob = function() {
    var jobDetails = {
      company: $scope.jobDetails.name,
      post: $scope.jobDetails.post,
      bond: $scope.jobDetails.bond,
      salary: $scope.jobDetails.salary,
      place: $scope.jobDetails.place,
      id: $scope.jobDetails.id,
      responsibilities: $scope.jobDetails.skill
    }
    updateJobService.insert(jobDetails, $scope.id).success(function(data) {
      $scope.jobDetails = data;
    });
  }
}]);