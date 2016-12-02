(function () {

  'use strict';

  angular
    .module('Altruism.components.register', [])
    .controller('registerController', registerController);

  registerController.$inject = ['$scope', 'registerService'];

  function registerController ($scope, registerService) {
    /*jshint validthis: true */
    const vm = this;
    vm.form = true;
    vm.registerObj = {};
    vm.showForm = function () {
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
        $scope.$parent.$id = response.data.account[0].id;
        vm.form = true;
        console.log($scope.$parent.$id);
      })
      .catch(err => console.log('controller', err));
    }
  }
})();
