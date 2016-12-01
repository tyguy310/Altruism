(function () {

  'use strict';

  angular
    .module('Altruism.components.help', [])
    .controller('helpController', helpController);

  helpController.$inject = ['$scope', 'helpService'];

  function helpController ($scope, helpService) {
    /* jshint validthis: true */
    const vm = this;

    helpService.getAllHelp()
    .then((helps) => {
      vm.help = helps.data.data;
    })
    .catch((err) => {
      console.log(err); // handle this error
    });

    // helpService.getSingleHelp()
    // .then((help) => {
    //   vm.help = help.data.data
    //   console.log(help);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }
})();
