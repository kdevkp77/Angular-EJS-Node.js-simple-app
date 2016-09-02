myapp.factory('forgotPasswordService', ['$http', function($http) {
  return {
    send: function(emailValue) {
      return $http.post('/forgot-password', emailValue).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);