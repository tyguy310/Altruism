
(function () {

  'use strict';

  angular
    .module('Altruism', [
      'ngRoute',
      'Altruism.config',
      'Altruism.components.main',
      'Altruism.components.help',
      'Altruism.components.profile',
      'Altruism.components.register',
      'Altruism.services.help',
      'Altruism.services.profile',
      'Altruism.services.register'
    ]);
})();
