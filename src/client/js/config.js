(function() {

  'use strict';

  angular
    .module('Altruism.config', [])
    .config(appConfig)

  function appConfig ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        access: true
      })
      .when('/help', {
        templateUrl: 'js/components/help/help.view.html',
        controller: 'helpController',
        controllerAs: 'helpCtrl',
        access: true
      })
      // .when(`/help/2`, {
      //   templateUrl: 'js/components/help/help.view.html',
      //   controller: 'helpController',
      //   controllerAs: 'helpCtrl',
      //   access: true
      // })
      .when('/register', {
        templateUrl: 'js/components/register/register.view.html',
        controller: 'registerController',
        controllerAs: 'registerCtrl',
        access: true
      })
      .when('/profile/', {
        templateUrl: 'js/components/profile/profile.view.html',
        controller: 'profileController',
        controllerAs: 'profileCtrl',
        access: true
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
