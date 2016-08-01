(function() {
  angular
    .module("samuraiBingo", [])
    .controller("mainController", ["$scope", "$http", function ($scope, $http) {
      $http.get("/api/squares")
        .then(function (response) {
          $scope.squares = response.data;
        });
    }]);
})();
