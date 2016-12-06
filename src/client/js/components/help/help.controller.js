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
      vm.help = helps.data.help;
    })
    .catch(err => {
      console.log(err); // handle this error
    });

    vm.reloadHelp = () => {
      helpService.getAllHelp()
      .then((helps) => {
        vm.help = helps.data.help;
        console.log(helps);
      })
      .catch(err => {
        console.log(err); // handle this error
      });
    }

    vm.addHelp = () => {
      helpService.addHelp(helpObj)
      .then(response => {
        vm.form = true;
        console.log(response);
      })
      .catch(err => console.log('Controller', err));
    };

    vm.singleHelp = (id) => {
      helpService.getSingleHelp(id)
      .then((help) => {
        vm.help = help.data.help
        console.log(help);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
})();
