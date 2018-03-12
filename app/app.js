var app = angular.module("app", ["ngMaterial", "ngRoute", "ngMessages"]);

app.controller("homeController", ["$scope", function($scope) {}]);

app.controller("forecastController", ["$scope", function($scope) {}]);

// Directives
app.directive("appNav", function() {
  return {
    restrict: "E",
    templateUrl: "app/directives/appNav.html",
    replace: true,
    scope: {}
  };
});
