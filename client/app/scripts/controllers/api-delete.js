'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApiDeleteCtrl
 * @description
 * # ApiDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ApiDeleteCtrl', function (
    $scope,
    $routeParams,
    APIS,
    $location
) {
  $scope.api = APIS.one($routeParams.id).get().$object;
  $scope.deleteAPI = function() {
    $scope.api.remove().then(function() {
      $location.path('/apis');
    });
  };
  $scope.back = function() {
    $location.path('/apis/' + $routeParams.id);
  };
});
