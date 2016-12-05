(function () {

  'use strict';

  angular
    .module('Altruism.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', 'loginService'];

  function loginController ($scope, loginService, $rootscope) {
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
        vm.loggedIn = true;
        vm.form = false;
      })
      .catch((err) => console.log(err));
    }
  };
})();
