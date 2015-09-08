'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApidataCtrl
 * @description
 * # ApidataCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ApidataCtrl', function (
        $scope,
        APIData) {
        $scope.apidatas = APIData.getList().$object;
    });
