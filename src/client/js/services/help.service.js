(function () {

  'use strict';

  angular
    .module('Altruism.services.help', [])
    .service('helpService', helpService);

  helpService.$inject = ['$http'];

  function helpService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://localhost:3000/help/';
    this.getAllHelp = function () {
      return $http.get(baseURL);
    };
    // this.getSingleHelp = function (id) {
    //   return $http.get(`${baseURL}${id}`);
    // };
    // this.addHelp = function (help) {
    //   return $http({
    //     method: 'POST',
    //     url: baseURL,
    //     data: help,
    //     headers: {'Content-Type': 'application/json'}
    //   });
    //   // return $http.post(baseURL, help);
    // };
  }
})();
