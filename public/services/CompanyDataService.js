myapp.factory('CompanyDataService', ['$http', function($http) {
  return {
    find: function(id, link) {
      return $http.get('/company/' + id + '/' + link).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);