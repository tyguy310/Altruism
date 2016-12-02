(function() {

  'use strict';

  angular
    .module('Altruism.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController ($scope) {
    /*jshint validthis: true */
    console.log($scope.$parent.$id);
    this.greeting = 'Hello World!';
  }
})();
