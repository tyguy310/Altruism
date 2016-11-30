(function () {

  'use strict';

  angular
    .module('Altruism.components.help', [])
    .controller('helpController', helpController);

  helpController.$inject = ['$scope', 'helpService'];

  function helpController ($scope, helpService) {
    /*jshint validthis: true */
    const vm = this;
    // vm.form = false;
    // vm.showForm = function () {
    //   vm.form = true;
    // };
    // vm.addHelp = function () {
    //   helpService.addHelp(vm.helpObj)
    //   .then(() => {
    //     helpService.getAllHelp()
    //     .then((helps) => {
    //       vm.help = helps.data.data;
    //     })
    //     .catch((err) => {
    //       console.log(err); // handle this error
    //     });
    //     vm.helpObj = init();
    //     vm.form = false;
    //   });
    // };
    // console.log(vm.helpObj);
    helpService.getAllHelp()
    .then((helps) => {
      vm.help = helps.data.data;
    })
    .catch((err) => {
      console.log(err); // handle this error
    });
    // helpService.getSingleHelp(1)
    // .then((help) => {
    //   console.log(help);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }
})();
