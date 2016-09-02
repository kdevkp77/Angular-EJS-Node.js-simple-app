myapp.controller('forgotPasswordController', ['$scope', '$rootScope', 'forgotPasswordService', function($scope, $rootScope, forgotPasswordService) {
  $rootScope.bodylayout = "bg3-image";
  $scope.forgotPassword = function() {
    var emailValue = {
      email: $scope.email
    }
    forgotPasswordService.send(emailValue).success(function(data) {
      if (data !== null) {
        $scope.emailError = data.emailError;
        $scope.successMsg = data.successMsg;
      }
    });
  }
}]);