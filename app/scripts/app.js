'use strict';

/**
 * @ngdoc overview
 * @name appliedApp
 * @description
 * # appliedApp
 *
 * Main module of the application.
 */
angular
  .module('appliedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smart-table'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/apps', {
        templateUrl: 'views/apps.html',
        controller: 'AppsCtrl'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'AppsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });