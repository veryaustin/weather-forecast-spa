// Controllers
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
