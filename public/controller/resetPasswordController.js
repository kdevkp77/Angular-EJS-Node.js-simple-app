myapp.controller('resetPasswordController', ['$scope', '$rootScope', '$routeParams', 'resetPasswordService', '$location', function($scope, $rootScope, $routeParams, resetPasswordService, $location) {
  $rootScope.bodylayout = "bg3-image";
  var token = $routeParams.token;
  $scope.resetPassword = function() {
    var datas = {
      token: token,
      password: $scope.password
    }
    resetPasswordService.insert(datas).success(function(data) {
      if (data.successMsg === "") {
        $scope.passwordError = data.PasswordError;
        $scope.successMsg = data.successMsg;
      } else {
        $scope.passwordError = data.PasswordError;
        $scope.successMsg = data.successMsg;
        $location.path("/login");
      }
    });
  }
}]);