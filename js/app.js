var app = angular.module("app", ["ngMaterial"]);

app.controller("homeController", [
  "$scope",
  function($scope) {
    $scope.city = "Nashville";
  }
]);
