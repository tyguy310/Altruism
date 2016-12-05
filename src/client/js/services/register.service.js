(function () {

  'use strict';

  angular
    .module('Altruism.services.register', [])
    .service('registerService', registerService);

  registerService.$inject = ['$http'];

  function registerService($http) {
    /*jshint validthis: true */
    if (process.env.NODE_ENV === 'development') {
      const baseURL = 'http://localhost/3000/register/'
    }
    else {
    const baseURL = 'https://altruism-app.herokuapp.com/register/';
    };

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
