myapp.factory('deleteJobService', ['$http', function($http) {
  return {
    delete: function(id) {
      return $http.get('/delete-job/' + id).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);