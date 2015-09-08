'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApidataEditCtrl
 * @description
 * # ApidataEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ApidataEditCtrl', function ($scope,
                                             $routeParams,
                                             APIS,
                                             APIData,
                                             $location) {
        $scope.editApiData = true;
        $scope.apidata = {};
        APIData.one($routeParams.id).get().then(function (apidata) {
            $scope.apidata = apidata;
            $scope.ids = APIS.getList().then(function(ids) {
                $scope.ids = ids;
                for (var i = 0; i < ids.length; i++ ) {
                    if (ids[i]._id === apidata.apiId) {
                        $scope.selectedItem = ids[i];
                        break;
                    }
                }
            });
            $scope.saveAPIData = function () {
                $scope.apidata.save().then(function () {
                    $location.path('/apidata/' + $routeParams.id);
                });
            };
        });
    });
