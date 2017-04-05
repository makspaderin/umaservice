angular
      .module('uma')
      .controller('umaController', function($scope, umaFactory) {
          $scope.items;

          umaFactory.getItems().then(function(data) {
            $scope.items = data.data;
          }, function(error) {
            console.log(error)
          });﻿
});
