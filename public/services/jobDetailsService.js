myapp.factory('jobDetailsService', ['$http', function($http) {
  return {
    find: function(companyPost) {
      return $http.post('/view-job', companyPost).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);