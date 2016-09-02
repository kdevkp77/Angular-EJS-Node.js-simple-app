myapp.factory('searchService', ['$http', function($http) {
  return {
    search: function(searchResult) {
      return $http.post('/', searchResult).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);