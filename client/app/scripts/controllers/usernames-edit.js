'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UsernamesEditCtrl
 * @description
 * # UsernamesEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('UsernamesEditCtrl', function ($scope,
                                               $routeParams,
                                               Usernames,
                                               $location) {
        $scope.editUsername = true;
        $scope.username = {};
        Usernames.one($routeParams.id).get().then(function (username) {
            $scope.username = username;
            $scope.saveUsername = function () {
                $scope.username.save().then(function () {
                    $location.path('/usernames/' + $routeParams.id);
                });
            };
        });
    });
