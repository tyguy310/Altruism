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
    vm.showForm = function () {
      vm.form = true;
    };
    $scope.$id = 3;
    registerService.Register()
    .then((register) => {
      console.log($scope.$id);
      vm.register = register;
    })
    .catch((err) => {
      console.log(err) // handle this error
    });
    //
  }
})();
