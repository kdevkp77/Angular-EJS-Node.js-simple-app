myapp.factory('jobInfoService', ['$http', function($http) {
  return {
    show: function() {
      return $http.get('/available-jobs').success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);