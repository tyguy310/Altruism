(function () {

  'use strict';

  angular
    .module('Altruism.components.profile', [])
    .controller('profileController', profileController);

  profileController.$inject = ['$scope', 'profileService'];

  function profileController ($scope, profileService) {
    /* jshint validthis: true */
    const vm = this;
    const id = $scope.$parent.$id;
    vm.profile = {};

    profileService.getSingleProfile(id)
    .then(profile => {
      vm.profile = profile.data.profile[0];
    })
    .catch(err => {
      console.log('catch', err);
    });

    vm.Register = (accountType, id) => {
      profileService.register(accountType, id)
      .then(profile => console.log(profile))
      .catch(err => console.log('control error', err))
    }
  }
})();
