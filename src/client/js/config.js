(function() {

  'use strict';

  angular
    .module('Altruism.config', [])
    .config(appConfig)
    // .run(routeStart);

  function appConfig ($routeProvider) {
    $routeProvider
      .when('/help', {
        templateUrl: 'js/components/help/help.view.html',
        controller: 'helpController',
        controllerAs: 'helpCtrl',
        access: true
      })
      // .when('/user', {
      //   templateUrl: 'js/components/user/user.view.html',
      //   controller: 'userController',
      //   controllerAs: 'userCtrl',
      //   access: true
      // })
      .otherwise({
        redirectTo: '/'
      });
  }

  // function routeStart($rootScope, $location, $route) {
  //   $rootScope.$on('$routeChangeStart', (event, next, current) => {
  //     if (!next.access) {
  //       if (!localStorage.getItem('token')) {
  //         $location.path('/user');
  //       }
  //     }
  //   });
  // }
})();
