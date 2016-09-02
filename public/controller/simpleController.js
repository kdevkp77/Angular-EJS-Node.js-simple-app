myapp.controller('simpleController', ['$scope', '$rootScope', 'searchService', '$cookies', '$location', function($scope, $rootScope, searchService, $cookies, $location) {
  $cookies.remove('loginCookie');
  $cookies.remove('addJobCookie');
  $cookies.remove('candidatesListCookie');
  $cookies.remove('editJobCookie');
  $rootScope.bodylayout = "bg-image"
  $scope.login = function() {
    $location.path("/login");
  }
  $scope.signUp = function() {
    $location.path("/sign-up");
  }
  $scope.search = function() { 
    var searchResult = {
      post: $scope.post,
      company: $scope.company
    };
    if ($scope.post === '' && $scope.company !== '' || $scope.post !== '' && $scope.company === '') {
      searchService.search(searchResult).success(function(data) {
        if(data.successMsg === "not found") {
          $location.path("/");
          $scope.successMsg = "No result found"; 
        } else{
          $location.path("/job");
          localStorage.link = data.link;
          localStorage.datas = JSON.stringify(data);
        }  
      });
    } else {
      searchService.search(searchResult).success(function(data) {
        if (data.msg === "found" && data.post.length !== 0) {
          $location.path("/guest");
          localStorage.link = data.link;
          localStorage.datas = JSON.stringify(data);
        } else {
          $location.path("/");
          $scope.successMsg = "No result found";
        }
      });
    }
  }
}]);