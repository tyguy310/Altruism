
(function () {

  'use strict';

  angular
    .module('Altruism', [
      'ngRoute',
      'Altruism.config',
      'Altruism.components.main',
      'Altruism.components.help',
      'Altruism.components.singleHelp',
      'Altruism.components.profile',
      'Altruism.components.register',
      'Altruism.components.login',
      'Altruism.services.chat',
      'Altruism.services.help',
      'Altruism.services.singleHelp',
      'Altruism.services.profile',
      'Altruism.services.register',
      'Altruism.services.login'
    ]);
})();
