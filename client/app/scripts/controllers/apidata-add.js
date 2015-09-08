'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ApidataAddCtrl
 * @description
 * # ApidataAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ApidataAddCtrl', function ($scope,
                                            APIS,
                                            APIData,
                                            $location) {
        $scope.addApiData = true;
        $scope.apidata = {code: 200};
        $scope.ids = APIS.getList().then(function(ids) {
            $scope.ids = ids;
            $scope.selectedItem = ids[0];
        });
        $scope.saveAPIData = function () {
            $scope.apidata.apiId = $scope.selectedItem._id;
            APIData.post($scope.apidata).then(function () {
                $location.path('/apidata');
            });
        };
    });
