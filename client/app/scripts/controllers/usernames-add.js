'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UsernamesAddCtrl
 * @description
 * # UsernamesAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('UsernamesAddCtrl', function ($scope,
                                              Usernames,
                                              $location) {
        $scope.username = {};
        $scope.saveUsername = function () {
            Usernames.post($scope.username).then(function () {
                $location.path('/usernames');
            });
        };
    });
