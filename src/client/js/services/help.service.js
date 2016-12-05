(function () {

  'use strict';

  angular
    .module('Altruism.services.help', [])
    .service('helpService', helpService);

  helpService.$inject = ['$http'];

  function helpService ($http) {
    /* jshint validthis: true */
    if (process.env.NODE_ENV === 'development') {
      const baseURL = 'http://localhost/3000/help/'
    }
    else {
    const baseURL = 'https://altruism-app.herokuapp.com/help/';
    }

    this.getAllHelp = function () {
      return $http.get(baseURL);
    };
    this.getSingleHelp = function (id) {
      return $http.get(`${baseURL}${id}`);
    };
    this.addHelp = function (helpObj) {
      return $http({
        method: 'POST',
        url: baseURL,
        data: helpObj,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})();
