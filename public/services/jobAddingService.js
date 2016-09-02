myapp.factory('jobAddingService', ['$http', function($http) {
  return {
    insert: function(jobDetails) {
      return $http.post('/job-add', jobDetails).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);