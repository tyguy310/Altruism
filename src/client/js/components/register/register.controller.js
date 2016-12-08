(function () {

  'use strict';

  angular
    .module('Altruism.components.register', [])
    .controller('registerController', registerController);

  registerController.$inject = ['$scope', 'registerService', '$window', '$rootScope'];

  function registerController ($scope, registerService, $window, $rootScope) {
    /* jshint validthis: true */
    const vm = this;
    vm.registerObj = {};

    if ($rootScope.id) {
      vm.form = false;
      $window.location.href = 'http://localhost:3000/#/profile/' + $rootScope.id;
    } else {
      vm.form = true;
    }

    vm.showForm = () => {
      vm.form = true;
    };

    registerService.Register()
    .then(register => {
      vm.register = register;
    })
    .catch((err) => {
      console.log(err) // handle this error
    });

    vm.Register = () => {
      registerService.registerAccount(vm.registerObj)
      .then(response => {
        $rootScope.id = response.data.account[0].id
        vm.form = false;
        $window.location.href = 'http://localhost:3000/#/profile/' + $rootScope.id;
      })
      .catch(err => console.log('controller', err));
    }
  }
})();
