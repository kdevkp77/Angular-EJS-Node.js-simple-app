myapp.service('fileUploadService', ['$http', function($http) { 
  this.uploadFileToUrl = function(profile, file, uploadUrl) {
    var detail = JSON.stringify(profile);
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