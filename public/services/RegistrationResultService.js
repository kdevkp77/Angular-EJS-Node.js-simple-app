myapp.factory('RegistrationResultService', ['$http', function($http) {
  return {
    register: function(id, link, registerResult) {
      return $http.post('/company/' + id, registerResult).success(function(data) { 
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);