(function () {

  'use strict';

  angular
    .module('Altruism.components.singleHelp', [])
    .controller('singleHelpController', singleHelpController);

  singleHelpController.$inject = ['singleHelpService', 'chatService', 'sendgridService', '$routeParams'];

  function singleHelpController (singleHelpService, chatService, sendgridService, $routeParams) {
    /* jshint validthis: true */
    const vm = this;
    const id = $routeParams.id;
    vm.applied = false;

    this.messages = [];

    vm.sendMessage = (msg) => {
      this.messages.push(chatService.sendMessage(msg));
    }

    vm.sendEmail = (userEmail, askerEmail) => {
      let sendgridObj = {
        userEmail,
        askerEmail
      }
      sendgridService.sendgrid(sendgridObj)
    }

    singleHelpService.getSingleHelp(id)
    .then(help => {
      vm.help = help.data.help[0]
    })
    .catch((err) => {
      console.log(err);
    });
  }
})();
