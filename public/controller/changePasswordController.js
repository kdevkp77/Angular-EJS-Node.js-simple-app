myapp.controller('changePasswordController', ['$scope', '$rootScope', 'changePasswordService', function($scope, $rootScope, changePasswordService) {
  $rootScope.bodylayout = "bg-image";
  $scope.changePassword = function() {
    var passwords = {
      password: $scope.password,
      newPassword: $scope.newPassword,
      confirmPassword: $scope.confirmPassword
    }
    changePasswordService.insert(passwords).success(function(data) {
      if (data.msg === "success") {
        $scope.passwordInfo = data;
      } else {
        $scope.passwordInfo = data;
      }
    });
  }
}]);