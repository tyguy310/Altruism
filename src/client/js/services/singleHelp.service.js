(function () {

  'use strict';

  angular
    .module('Altruism.services.singleHelp', [])
    .service('singleHelpService', singleHelpService);

  singleHelpService.$inject = ['$http'];

  function singleHelpService ($http) {
    /* jshint validthis: true */
    // const baseURL = 'https://altruism-app.herokuapp.com/help/'
    const baseURL = 'http://localhost:3000/help/'

    this.getSingleHelp = id => {
      return $http.get(`${baseURL}${id}`);
    };
  }
})();
