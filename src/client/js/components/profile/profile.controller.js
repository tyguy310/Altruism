(function () {

  'use strict';

  angular
    .module('Altruism.components.profile', [])
    .controller('profileController', profileController);

  profileController.$inject = ['$scope', 'profileService'];

  function profileController ($scope, profileService) {
    /* jshint validthis: true */
    const vm = this;
    const id = $scope
    console.log(id);

    profileService.getSingleProfile(id)
    .then((profile) => {
      console.log(profile);
      vm.profile = profile.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  }
})();
