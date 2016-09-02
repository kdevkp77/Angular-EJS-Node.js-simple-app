myapp.factory('deleteAccountService', ['$http', function($http) {
  return {
    delete: function() {
      return $http.get('/delete-account').success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);