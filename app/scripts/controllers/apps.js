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

    $scope.applications = [];

    $scope.submitForm = function(isValid) {
      var app = {}
      if (isValid) {
        app.company = $scope.name ;
        app.date = $scope.user.date;
        app.link = $scope.link;
        app.id = $scope.id;
        app.description = $scope.description;
        app.keywords = $scope.keywords;

        $scope.applications.push(angular.copy(app));
        $scope.SaveData();
      

        $scope.name = '';
        $scope.user.date = '';
        $scope.link = '';
        $scope.id = '';
        $scope.description = '';
        $scope.keywords = '';
      }

    };

    $scope.isEditing = false;
    $scope.edit = function(item){
      $scope.isEditing = true;
      console.log(item);
    }

    $scope.editSave = function(item){
      $scope.isEditing = false;
      //should pull data from fields
      //should preserve field data
      //should ovveride that index's form
        //$scope.applications[item] = 
      ///should save all data again when save is pressed
    }

    $scope.remove = function(item){
      if(window.confirm('Really Delete?')){
        $scope.applications.splice(item, 1);
      }
      $scope.SaveData();
    }

    $scope.LoadData = function(){
          var saved = window.localStorage.getItem('apps');
            if(saved !== 'undefined'){
              saved = JSON.parse(saved);
              angular.copy(saved, $scope.applications);
              console.log('Data Loaded!')
            }
        };

    $scope.SaveData = function(){
      window.localStorage.setItem('apps', JSON.stringify($scope.applications))
      console.log('saved!')
    };

    //initial load of data
      $scope.LoadData();
  });


