myapp.controller('loginController', ['$scope', '$rootScope', 'loginValidationService', '$cookies', '$location', function($scope, $rootScope, loginValidationService, $cookies, $location) {
  $rootScope.bodylayout = "bg3-image";
  $cookies.remove('loginCookie');
  $cookies.remove('addJobCookie');
  $cookies.remove('candidatesListCookie');
  $cookies.remove('editJobCookie');
  $scope.validateEmailPage = function() {
    var loginValue = {
      email: $scope.email,
      password: $scope.password
    };
    loginValidationService.loginValidation(loginValue).success(function(data) {
      if (data.emailError !== '' && data.passwordError !== '') {
        if (data.data === undefined) {
          $location.path("/job");
          localStorage.link = data.link;
          localStorage.datas = JSON.stringify(data);
        } else {
          $location.path("/admin");
        }
      } else {
        $scope.emailError = data.emailError;
        $scope.passwordError = data.passwordError;
      }
    });
  };
}]);