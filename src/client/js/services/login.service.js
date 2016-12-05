(function () {

  'use strict';

  angular
    .module('Altruism.services.login', [])
    .service('loginService', loginService);

  loginService.$inject = ['$http'];

  function loginService ($http) {
    /* jshint validthis: true */
    if (process.env.NODE_ENV === 'development') {
      const baseURL = 'http://localhost/3000/login/'
    }
    else {
      const baseURL = 'https://altruism-app.herokuapp.com/login/';
    }
    this.login = function (loginObj) {
      return $http({
        method: 'POST',
        url: baseURL + 'go',
        data: loginObj,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})()
