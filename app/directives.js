// Directives
app.directive("appNav", function() {
  return {
    restrict: "E",
    templateUrl: "app/directives/appNav.html",
    replace: true,
    scope: {}
  };
});

app.directive("weatherReport", function() {
  return {
    restrict: "E",
    templateUrl: "app/directives/weatherReport.html",
    replace: true,
    scope: {
      weatherDay: "=",
      convertDate: "&"
    }
  };
});
