//Copyright (c) 2016 SitePoint

(function() {

  angular
    .module('Rwebapp')
    .service('loginData', loginData);

  loginData.$inject = ['$http', 'authentication'];
  function loginData ($http, authentication) {

    var getProfile = function () {
      return $http.get('/api/profile', {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };

    return {
      getProfile : getProfile
    };
  }
})();