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

    profileService.getSingleProfile(id)
    .then(profile => {
      console.log('response', profile.data.profile[0]);
      vm.profile = profile.data.profile[0];
    })
    .catch(err => {
      console.log('catch', err);
    });

    profileService.register()
    .then(profile => console.log(profile))
    .catch(err => console.log(err))
  }
})();
