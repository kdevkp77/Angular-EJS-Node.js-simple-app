myapp.controller('candidateController', ['$scope', '$rootScope', 'candidatesListService', '$location', function($scope, $rootScope, candidatesListService, $location) {
  $rootScope.bodylayout = "bg3-image";
  $scope.validateCandidatesList = function() {
    var companyPost = {
      company: $scope.company,
      post: $scope.post
    }
    candidatesListService.find(companyPost).success(function(data) {
      if (data.companyError === "Company name required" || data.postError === "Post should specify") {
        $scope.companyError = data.companyError;
        $scope.postError = data.postError;
      } else if (data.companyError === "" && data.postError === "") {
        $scope.postError = "Invalid company name or post";
      } else {
        $location.path("/candidates-list");
        localStorage.candidatesList = JSON.stringify(data);
      }
    });
  }
}]);