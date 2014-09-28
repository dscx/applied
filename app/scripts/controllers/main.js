'use strict';

/**
 * @ngdoc function
 * @name appliedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appliedApp
 */
angular.module('appliedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
