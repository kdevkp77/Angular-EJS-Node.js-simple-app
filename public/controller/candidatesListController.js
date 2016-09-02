myapp.controller('candidatesListController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $rootScope.bodylayout = "";
  $scope.candidatesData = JSON.parse(localStorage.candidatesList);
}]);