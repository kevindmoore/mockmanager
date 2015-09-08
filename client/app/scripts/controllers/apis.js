'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApisCtrl
 * @description
 * # ApisCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ApisCtrl', function (
    $scope,
    APIS
  ) {
    $scope.apis = APIS.getList().$object;
  });
