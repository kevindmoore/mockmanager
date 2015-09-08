'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApiAddCtrl
 * @description
 * # ApiAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ApiAddCtrl', function ($scope,
                                        APIS,
                                        $location) {
        $scope.api = {type: "GET"};
        $scope.saveAPI = function () {
            APIS.post($scope.api).then(function () {
                $location.path('/apis');
            });
        };
    });
