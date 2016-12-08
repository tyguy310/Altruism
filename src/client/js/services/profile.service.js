(function () {

  'use strict';

  angular
    .module('Altruism.services.profile', [])
    .service('profileService', profileService);

  profileService.$inject = ['$http'];

  function profileService ($http, $scope) {
    /* jshint validthis: true */

    // const baseURL = 'https://altruism-app.herokuapp.com/profile/'
    const baseURL = 'http://localhost:3000/profile/'

    this.getSingleProfile = (id) => {
      return $http.get(`${baseURL}${id}`);
    };

    this.addProfile = (profileObj) => {
      return $http({
        method: 'POST',
        url: baseURL,
        data: profileObj,
        headers: {'Content-Type': 'application/json'}
      })
    }

    this.register = (accountType, id) => {
      const type = { accountType }
      return $http({
        method: 'PUT',
        url: `${baseURL}${id}`,
        data: type,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})();
