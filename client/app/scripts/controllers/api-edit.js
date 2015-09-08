'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApiEditCtrl
 * @description
 * # ApiEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ApiEditCtrl', function ($scope,
                                         $routeParams,
                                         APIS,
                                         $location) {
        $scope.editApi = true;
        $scope.api = {};
        APIS.one($routeParams.id).get().then(function (api) {
            $scope.api = api;
            $scope.saveApi = function () {
                $scope.api.save().then(function () {
                    $location.path('/apis/' + $routeParams.id);
                });
            };
        });
    });
