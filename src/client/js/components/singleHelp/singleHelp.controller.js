(function () {

  'use strict';

  angular
    .module('Altruism.components.singleHelp', [])
    .controller('singleHelpController', singleHelpController);

  singleHelpController.$inject = ['$scope', 'singleHelpService', $routeParams];

  function singleHelpController ($scope, singleHelpService, $routeParams) {
    /* jshint validthis: true */
    const vm = this;
    const id = $routeParams.id;

    singleHelpService.getSingleHelp(id)
    .then((help) => {
      vm.help = help.data.help[0]
    })
    .catch((err) => {
      console.log(err);
    });
  }
})();
