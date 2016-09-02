myapp.factory('changePasswordService', ['$http', function($http) {
  return {
    insert: function(passwords) {
      return $http.post('/change-password', passwords).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);