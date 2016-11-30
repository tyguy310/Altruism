(function() {

  'use strict';

  angular
    .module('Altruism.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }
})();
