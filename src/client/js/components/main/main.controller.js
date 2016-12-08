(function() {

  'use strict';

  angular
    .module('Altruism.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$rootScope'];

  function mainController ($scope, $rootScope) {
    /* jshint validthis: true */

    this.greeting = 'Hello World!';
  }
})();
