myapp.service('updateProfileService', ['$http', function($http) {
  this.uploadFileToUrl = function(personalInfo, file, uploadUrl) {
    var detail = JSON.stringify(personalInfo);
    var fd = new FormData();
    fd.append('file', file);
    fd.append('body', detail);
    return $http.post(uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {
        'Content-Type': undefined
      },
    }).success(function(data) {
      return data;
    }).error(function() {});
  }
}]);