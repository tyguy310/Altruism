(function () {

  'use strict';

  angular
    .module('Altruism.services.login', [])
    .service('loginService', loginService);

  loginService.$inject = ['$http'];

  function loginService ($http) {
    /* jshint validthis: true */
    const baseURL = 'https://git.heroku.com/altruism-app.git/login/';

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
