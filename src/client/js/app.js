
(function() {

  'use strict';

  angular
    .module('Altruism', [
      'ngRoute',
      'Altruism.config',
      'Altruism.components.main',
      'Altruism.components.help',
      // 'Altruism.components.user',
      'Altruism.services.help'
    ]);
})();
