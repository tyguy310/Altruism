(function () {

  'use strict';

  angular
    .module('Altruism.services.profile', [])
    .service('profileService', profileService);

  profileService.$inject = ['$http'];

  function profileService($http, $scope) {
    /* jshint validthis: true */
    const baseURL = 'https://altruism-app.herokuapp.com/profile/';

    this.getSingleProfile = function (id) {
      console.log('service', id);
      return $http.get(`${baseURL}${id}`);
    };

    this.register = (accountType, id) => {
      return $http({
        method: 'PUT',
        url: baseURL + id,
        data: accountType,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})();
