myapp.factory('resetPasswordService', ['$http', function($http) {
  return {
    insert: function(datas) {
      return $http.post('/reset-password', datas).success(function(data) {
        return data;
      }).error(function(err) {
        return err;
      })
    }
  }
}]);