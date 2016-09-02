myapp.factory('candidatesListService', ['$http', function($http) {
  return {
    find: function(companyPost) {
      return $http.post('/candidates', companyPost).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);