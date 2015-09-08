'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UsernamesViewCtrl
 * @description
 * # UsernamesViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('UsernamesViewCtrl', function ($scope,
                                               $routeParams,
                                               Usernames) {
        $scope.viewUsernames = true;
        $scope.username = Usernames.one($routeParams.id).get().$object;
    });
