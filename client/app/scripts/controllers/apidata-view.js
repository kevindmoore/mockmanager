'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApidataViewCtrl
 * @description
 * # ApidataViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ApidataViewCtrl', function ($scope,
                                             $routeParams,
                                             APIData) {
        $scope.viewApiData = true;
        $scope.apidata = APIData.one($routeParams.id).get().$object;
    });
