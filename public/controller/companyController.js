myapp.controller('companyController', ['$scope', '$rootScope', 'CompanyDataService', 'RegistrationResultService', '$routeParams', function($scope, $rootScope, CompanyDataService, RegistrationResultService, $routeParams) {
  $rootScope.bodylayout = "";
  var id = $routeParams.id;
  var link = $routeParams.link;
  $scope.datas = JSON.parse(localStorage.datas);
  CompanyDataService.find(id, link).success(function(data) {
    if (data !== null) {
      $scope.companyDetails = data;
    }
  });
  $scope.register = function(reg) {
    var registerResult = {
      email: $scope.companyDetails.email,
      id: $scope.companyDetails.id,
      register: reg,
      datas: $scope.datas
    };
    RegistrationResultService.register(id, link, registerResult).success(function(data) {
      if (data.datas === undefined) {
        $scope.companyDetails = data;
      } else {['']
        $scope.companyDetails = data;
        localStorage.datas = JSON.stringify(data.datas);
      }
    });
  }
}]);