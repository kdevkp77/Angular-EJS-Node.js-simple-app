myapp.controller('deleteJobController', ['$scope', '$routeParams', 'deleteJobService', '$location', function($scope, $routeParams, deleteJobService, $location) {
  var id = $routeParams.id;
  deleteJobService.delete(id).success(function(data) {
    if (data.msg === "success") {
      $location.path("/admin");
    }
  });
}]);