(function () {

  'use strict';

  angular
    .module('Altruism.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', 'loginService', '$window'];

  function loginController ($scope, loginService, $window) {
    /* jshint validthis: true */

    const vm = this;
    vm.form = true;
    vm.loginObj = {};
    vm.showForm = function () {
      vm.form = true;
    };

    vm.Login = () => {

      loginService.login(vm.loginObj)
      .then(login => {
        vm.form = false;
        $window.location.href = 'https://altruism-app.herokuapp.com/#/profile';
      })
      .catch((err) => console.log(err));
    }
  };
})();
