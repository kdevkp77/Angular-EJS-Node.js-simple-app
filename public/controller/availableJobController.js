myapp.controller('availableJobController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $rootScope.bodylayout = "";
  $scope.jobInfo = JSON.parse(localStorage.jobInfo);
}]);