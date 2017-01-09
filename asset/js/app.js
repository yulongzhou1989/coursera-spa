(function (){
  'use strict';

  var myFirstApp = angular.module('myFirstApp', []);

  myFirstApp.controller('MyFirstController', MyFirstController);
  MyFirstController.$inject = ['$scope','$filter'];
  function MyFirstController($scope, $filter) {
    $scope.name = "Yulong";
    $scope.sayHello = function (){
      return "Zhou";
    }

    $scope.upper = function (){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
  }

  //angular.module('NameCalculator', [])

  myFirstApp.controller('NameCalculator', NameCalculator);
  NameCalculator.$inject = ['$scope'];
  function NameCalculator ($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
      var totalValue = calNumericForStr($scope.name);
      $scope.totalValue = totalValue;
    }
  }

  function calNumericForStr(str){
    var totalValue = 0;

    for(var i=0; i<str.length; i++){
      totalValue += str.charCodeAt(i);
    }

    return totalValue;
  }
})();
