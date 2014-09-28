'use strict';

/**
 * @ngdoc function
 * @name appliedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appliedApp
 */
angular.module('appliedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
