myapp.controller('jobViewController', ['$scope', '$rootScope', 'jobDetailsService', '$location', function($scope, $rootScope, jobDetailsService, $location) {
  $rootScope.bodylayout = "bg3-image";
  $scope.showJob = function() {
    var companyPost = {
      company: $scope.company,
      post: $scope.post
    }
    jobDetailsService.find(companyPost).success(function(data) {
      if (data.companyErr === "Company name required" || data.postErr === "Post should specify") {
        $scope.companyErr = data.companyErr;
        $scope.postErr = data.postErr;
      } else if (data.postErr === "" && data.companyErr === "") {
        $scope.postErr = "Invalid company name or post";
      } else {
        $location.path("/update-job");
        localStorage.updateJob = JSON.stringify(data); 
      }
    });
  }
}]);