(function () {

  'use strict';

  angular
    .module('Altruism.services.help', [])
    .service('helpService', helpService);

  helpService.$inject = ['$http'];

  function helpService ($http) {
    /* jshint validthis: true */
    // const baseURL = 'https://altruism-app.herokuapp.com/help/'
    const baseURL = 'http://localhost:3000/help/'

    this.getAllHelp = () => {
      return $http.get(baseURL);
    };

    this.getSingleHelp = id => {
      return $http.get(`${baseURL}${id}`);
    };

    this.addHelp = helpObj => {
      return $http({
        method: 'POST',
        url: baseURL,
        data: helpObj,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})();
