myapp.factory('loginValidationService', ['$http', function($http) {
  return {
    loginValidation: function(loginValue) {
      return $http.post('/login', loginValue).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);