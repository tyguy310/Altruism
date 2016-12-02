(function () {

  'use strict';

  angular
    .module('Altruism.components.help', [])
    .controller('helpController', helpController);

  helpController.$inject = ['$scope', 'helpService'];

  function helpController ($scope, helpService) {
    /* jshint validthis: true */
    const vm = this;
    vm.form = true;
    vm.helpObj = {};
    vm.showForm = function () {
      vm.form = true;
    };

    helpService.getAllHelp()
    .then((helps) => {
      vm.help = helps.data.data;
    })
    .catch((err) => {
      console.log(err); // handle this error
    });

    // console.log($scope.$parent.$id);

    vm.addHelp = () => {
      helpService.addHelp(helpObj)
      .then(response => {
        vm.form = true;
        console.log(response);
      })
      .catch(err => console.log('Controller', err));
    };

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
