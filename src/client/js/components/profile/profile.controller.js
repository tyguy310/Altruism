(function () {

  'use strict';

  angular
    .module('Altruism.components.profile', [])
    .controller('profileController', profileController);

  profileController.$inject = ['$scope', 'profileService', '$window', '$rootScope', '$route'];

  function profileController ($scope, profileService, $window, $rootScope, $route) {
    /* jshint validthis: true */
    const vm = this;
    const accountID = $rootScope.id;

    vm.form = false;
    vm.profile = {};
    vm.newProfile = {};

    if (accountID) {
      profileService.getSingleProfile(accountID)
      .then(profile => {
        vm.profile = profile.data;
        $route.reload();
      })
      .catch(err => {
        console.log('catch, need to create profile', err);
      });
    } else {
      $window.location.href = 'http://localhost:3000/#/login'
    }

    vm.createProfile = () => {
      vm.newProfile.account_id = accountID;
      profileService.addProfile(vm.newProfile)
      .then(profile => console.log(profile))
      .catch(err => console.log('control error', err))
    }

    vm.Register = (accountType, profileID) => {
      profileService.register(accountType, accountID)
      .then(profile => console.log(profile))
      .catch(err => console.log('control error', err))
    }
  }
})();
