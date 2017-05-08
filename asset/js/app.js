(function (){
  'use strict';

  var myFirstApp = angular.module('myFirstApp', []);

  // myFirstApp.filter('myFilter', CustomFilterFactory){
  //
  // }

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

  myFirstApp.controller('NameCalculator', NameCalculator);
  NameCalculator.$inject = ['$scope','$filter'];
  function NameCalculator ($scope, $filter){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
      setTimeout(function () {
        $scope.$apply(function () {
          var totalValue = calNumericForStr($scope.name);
          $scope.totalValue = $filter('number')(totalValue);
        });
      },1000);
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
