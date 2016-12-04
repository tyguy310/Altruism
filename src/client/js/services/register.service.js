(function () {

  'use strict';

  angular
    .module('Altruism.services.register', [])
    .service('registerService', registerService);

  registerService.$inject = ['$http'];

  function registerService($http) {
    /*jshint validthis: true */
    const baseURL = 'https://git.heroku.com/altruism-app.git/register/';

    this.Register = function (register) {
      return $http.get(baseURL)
    }

    this.registerAccount = function (accountObj) {
      return $http({
        method: 'POST',
        url: baseURL + 'go',
        data: accountObj,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})()
