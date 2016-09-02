myapp.factory('updateJobService', ['$http', function($http) {
  return {
    insert: function(jobDetails, id) {
      return $http.post('/update-job/' + id, jobDetails).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);