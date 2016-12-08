(function () {

  'use strict';

  angular
    .module('Altruism.components.login', [])
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', 'loginService', '$window', '$rootScope'];

  function loginController ($scope, loginService, $window, $rootScope) {
    /* jshint validthis: true */

    const vm = this;
    if ($rootScope.id) {
      vm.form = false;
    } else {
      vm.form = true;
    }

    vm.loginObj = {};
    vm.showForm = function () {
      vm.form = true;
    };

    vm.Login = () => {

      loginService.login(vm.loginObj)
      .then(login => {
        $rootScope.id = login.data.data[0].id
        vm.form = false;
        $window.location.href = 'http://localhost:3000/#/profile/' + $rootScope.id;
      })
      .catch((err) => console.log(err));
    }
  };
})();
