'use strict';

/**
 * @ngdoc function
 * @name appliedApp.controller:AppsCtrl
 * @description
 * # AppsCtrl
 * Controller of the appliedApp
 */
angular.module('appliedApp')
  .controller('AppsCtrl', function ($scope) {
    $scope.testForms = [
      {'Company': 'Apple', 'DateApplied': new Date()},
      {'Company': 'Miscorosft', 'DateApplied': new Date()},
      {'Company': 'Sweet Startup', 'DateApplied': new Date()}
    ];

    $scope.applications = {}

    $scope.submitForm = function(isValid) {
      $scope.master = {}

      if (isValid) {
        //window.localStorage.setItem('forms', JSON.stringift($scope.applications))
        $scope.name = '';
        $scope.user.date = '';
        $scope.link = '';
        $scope.id = '';
        $scope.description = ''
        console.log('saved!')
      }

    };

  });


