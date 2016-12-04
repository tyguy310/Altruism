(function () {

  'use strict';

  angular
    .module('Altruism.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', 'loginService'];

  function loginController ($scope, loginService, $rootscope) {
    /*jshint validthis: true */
    const vm = this;
    vm.form = true;
    vm.loginObj = {};
    vm.showForm = function () {
      vm.form = true;
    };

    vm.Login = () => {
      console.log('controller', vm.loginObj);
      loginService.login(vm.loginObj)
      .then(login => {
        this.loggedIn = true;
      })
      .catch((err) => console.log(err));
    }
  };
})();
