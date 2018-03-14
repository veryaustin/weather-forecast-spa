// Routes
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/pages/home.html",
      controller: "homeController"
    })

    .when("/forecast", {
      templateUrl: "app/pages/forecast.html",
      controller: "forecastController"
    })

    .when("/forecast/:days", {
      templateURL: "app/pages/forecast.html",
      controller: "forecastController"
    });
});
