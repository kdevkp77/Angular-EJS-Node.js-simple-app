myapp.controller('jobAddController', ['$scope', '$rootScope', 'jobAddingService', function($scope, $rootScope, jobAddingService) {
  $rootScope.bodylayout = "bg-image";
  $scope.validateJob = function() {
    var jobDetails = {
      id: $scope.id,
      company: $scope.company,
      post: $scope.post,
      bond: $scope.bond,
      salary: $scope.salary,
      place: $scope.place,
      responsibilities: $scope.responsibilities
    }
    jobAddingService.insert(jobDetails).success(function(data) {
      if (data !== null) {
        $scope.jobAddInfo = data;
      }
    });
  }
}]);