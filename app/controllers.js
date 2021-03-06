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
  "$routeParams",
  "$resource",
  "cityService",
  "weatherKey",
  function($scope, $routeParams, $resource, cityService, weatherKey) {
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || "2";

    $scope.weatherAPI = $resource(
      "http://api.openweathermap.org/data/2.5/forecast/daily",
      { callback: "JSON_CALLBACK" },
      { get: { method: "JSONP" } }
    );

    $scope.weatherResult = $scope.weatherAPI.get({
      appid: weatherKey.appKey,
      q: $scope.city,
      cnt: $scope.days
    });

    $scope.convertDate = function(dt) {
      return new Date(dt * 1000);
    };

    $scope.convertToFahrenheit = function(degK) {
      return Math.round(1.8 * (degK - 273) + 32);
    };
  }
]);
