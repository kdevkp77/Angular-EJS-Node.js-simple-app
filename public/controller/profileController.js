myapp.controller('profileController', ['$scope', '$rootScope', '$routeParams', 'viewProfileService', 'updateProfileService', '$location', function($scope, $rootScope, $routeParams, viewProfileService, updateProfileService, $location) {
  var email = $routeParams.email;
  $rootScope.bodylayout = "bg-image";
  viewProfileService.find().success(function(data) {
    if (data.msg === "success") {
      $scope.viewProfile = data;
    } else {
      $location.path("/sign-up");
    }
  });
  $scope.validateProfile = function() {
    var personalInfo = {
      fname: $scope.viewProfile.name,
      phoneNo: $scope.viewProfile.phoneNo,
      address: $scope.viewProfile.location,
      privilage: $scope.viewProfile.privilage,
      gender: $scope.viewProfile.gender,
      workExperience: $scope.viewProfile.workExperience
    }
    var file = $scope.cv;
    var uploadUrl = "/view-profile";
    updateProfileService.uploadFileToUrl(personalInfo, file, uploadUrl).success(function(data) {
      if (data.msg === "success") {
        $location.path("/login");
      } else {
        $scope.viewProfile = data;
      }
    });
  }
}]);