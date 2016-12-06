(function () {

  'use strict';

  angular
    .module('Altruism.components.singleHelp', [])
    .controller('singleHelpController', singleHelpController);

  singleHelpController.$inject = ['singleHelpService', 'chatService', '$routeParams'];

  function singleHelpController (singleHelpService, chatService, $routeParams) {
    /* jshint validthis: true */
    const vm = this;
    const id = $routeParams.id;
    this.messages = [];

    this.sendMessage = (msg) => {
      this.messages.push(chatService.sendMessage(msg));
    }


    singleHelpService.getSingleHelp(id)
    .then((help) => {
      vm.help = help.data.help[0]
    })
    .catch((err) => {
      console.log(err);
    });
  }
})();
