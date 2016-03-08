var app = angular.module('myApp', ['angular.filter']);
app.controller('AppCtrl', function($scope, $http) {
    $http.get("trades.json")
        .success(function (data) {
            $scope.names =data.trades;
        });
});