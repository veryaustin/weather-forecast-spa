var app = angular.module("app", ["ngMaterial", "ngRoute", "ngMessages"]);

app.controller("homeController", [
  "$scope",
  "$location",
  "cityService",
  function($scope, $location, cityService) {
    $scope.city = cityService.city;

    $scope.$watch("city", function() {
      cityService.city = $scope.city;
    });

    $scope.submit = function() {
      $location.path("/forecast");
    };
  }
]);

app.controller("forecastController", [
  "$scope",
  "cityService",
  function($scope, cityService) {
    $scope.city = cityService.city;
  }
]);

// Services
app.service("cityService", function() {
  this.city = "";
});

// Directives
app.directive("appNav", function() {
  return {
    restrict: "E",
    templateUrl: "app/directives/appNav.html",
    replace: true,
    scope: {}
  };
});
