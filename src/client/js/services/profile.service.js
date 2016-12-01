(function () {

  'use strict';

  angular
    .module('Altruism.services.profile', [])
    .service('profileService', profileService);

  profileService.$inject = ['$http'];

  function profileService($http) {
    /* jshint validthis: true */
    const baseURL = 'http://localhost:3000/profile/';

    this.getSingleProfile = function (id) {
      return $http.get(`${baseURL}${id}`);
    };
  }
})();
