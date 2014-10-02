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
    // $scope.testForms = [
    //   {'company': 'Apple', 'DateApplied': 'Jan 1st', 'Link': 'www.apple.com', 'description': 'Mac genius', 'id': 12836},
    //   {'company': 'Microsoft', 'DateApplied': 'Jan 2nd', 'Link': 'www.microsoft.com', 'description': 'Software Engineer', 'id': 17728},
    //   {'company': 'Sweet Startup', 'DateApplied': 'Jan 3rd', 'Link': 'www.google.com', 'description': 'Software Engineer', 'id': 92036}
    // ];

    $scope.applications = [];
    //$scope.applications.entries = {};
    //$scope.applications[0] = false;


    $scope.submitForm = function(isValid) {
      var app = {};
      if (isValid) {
        app.company = $scope.name ;
        app.date = $scope.user.date;
        app.link = $scope.link;
        app.id = $scope.id;
        app.description = $scope.description;
        app.keywords = $scope.keywords;

        $scope.applications.push(angular.copy(app));
        // window.localStorage.setItem('apps', JSON.stringify($scope.applications))
        $scope.SaveData();
      

        $scope.name = '';
        $scope.user.date = '';
        $scope.link = '';
        $scope.id = '';
        $scope.description = '';
        $scope.keywords = '';
      }

    };

    $scope.edit = function(item){
      console.log(item);
    };

    $scope.remove = function(item){
      if(window.confirm('Really Delete?')){
        $scope.applications.splice(item, 1);
      }
      $scope.SaveData();
    };

    $scope.LoadData = function(){
          var saved = window.localStorage.getItem('apps');
            if(saved !== 'undefined'){
              saved = JSON.parse(saved);
              angular.copy(saved, $scope.applications);
              console.log('Data Loaded!');
            }
        };

    $scope.SaveData = function(){
      window.localStorage.setItem('apps', JSON.stringify($scope.applications));
      console.log('saved!');
    };

    //initial load of data
      $scope.LoadData();
  });


