(function () {

  'use strict';

  angular
    .module('Altruism.services.sendgrid', [])
    .service('sendgridService', sendgridService);

  sendgridService.$inject = ['$http'];

  function sendgridService ($http) {

    // const baseURL = 'https://altruism-app.herokuapp.com/sendgrid/'
    const baseURL = 'http://localhost:3000/sendgrid/'

    this.sendgrid = (sendgridObj) => {
      return $http({
        method: 'POST',
        url: baseURL,
        data: sendgridObj,
        headers: {'Content-Type': 'application/json'}
      });
    }
  };
})();
