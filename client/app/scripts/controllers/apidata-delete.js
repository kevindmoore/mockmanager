'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApidataDeleteCtrl
 * @description
 * # ApidataDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ApidataDeleteCtrl', function ($scope,
                                               $routeParams,
                                               APIData,
                                               $location) {
        $scope.apidata = APIData.one($routeParams.id).get().$object;
        $scope.deleteAPIData = function () {
            $scope.apidata.remove().then(function () {
                $location.path('/apidata');
            });
        };
        $scope.back = function () {
            $location.path('/apidata/' + $routeParams.id);
        };
    });
