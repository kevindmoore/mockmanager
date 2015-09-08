'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApiViewCtrl
 * @description
 * # ApiViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ApiViewCtrl', function ($scope,
                                         $routeParams,
                                         APIS) {
        $scope.viewApi = true;
        $scope.api = APIS.one($routeParams.id).get().$object;
    });
