myapp.factory('viewProfileService', ['$http', function($http) {
  return {
    find: function() {
      return $http.get('/view-profile').success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);