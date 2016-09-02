myapp.controller('signUpController', ['$scope', '$rootScope', 'fileUploadService', '$location', function($scope, $rootScope, fileUploadService, $location) {
  $rootScope.bodylayout = "bg-image";
  $scope.validateSignUpPage = function() {
    var profile = {
      fname: $scope.fname,
      email: $scope.email,
      password: $scope.password,
      confirmPassword: $scope.confirmPassword,
      phoneNo: $scope.phoneNo,
      address: $scope.address,
      workExperience: $scope.workExperience,
      gender: $scope.gender,
      privilage: $scope.privilage
    }
    var file = $scope.cv;
    var uploadUrl = "/sign-up";
    fileUploadService.uploadFileToUrl(profile, file, uploadUrl).success(function(data) {
      if (data.msg === "failed") {
        $scope.personalDetails = data;
      } else {
        $location.path("/login");
      }
    });
  };
}]);