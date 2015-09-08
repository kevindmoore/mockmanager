'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UsernamesDeleteCtrl
 * @description
 * # UsernamesDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('UsernamesDeleteCtrl', function ($scope,
                                                 $routeParams,
                                                 Usernames,
                                                 $location) {
        $scope.username = Usernames.one($routeParams.id).get().$object;
        $scope.deleteUsername = function () {
            $scope.username.remove().then(function () {
                $location.path('/usernames');
            });
        };
        $scope.back = function () {
            $location.path('/usernames/' + $routeParams.id);
        };
    });
