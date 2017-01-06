(function (){
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope) {
    $scope.name = "Yulong";
    $scope.sayHello = function (){
      return "Zhou";
    }
  });
})();
