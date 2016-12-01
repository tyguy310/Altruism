(function () {

  'use strict';

  angular
    .module('Altruism.services.register', [])
    .service('registerService', registerService);

  registerService.$inject = ['$http'];

  function registerService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://localhost:3000/register/';
    this.Register = function (register) {
      return $http.get(baseURL)
    }
    // this.getSingleRegister = function (id) {
    //   return $http.get(`${baseURL}${id}`);
    // };
    // this.Register = function (register) {
    //   return $http({
    //     method: 'POST',
    //     url: baseURL,
    //     data: register,
    //     headers: {'Content-Type': 'application/json'}
    //   });
    //   return $http.post(baseURL, register);
    // };
  }
})()
