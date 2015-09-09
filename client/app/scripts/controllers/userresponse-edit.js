'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserresponseEditCtrl
 * @description
 * # UserresponseEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('UserresponseEditCtrl', function ($scope,
                                                  $routeParams,
                                                  Usernames,
                                                  APIS,
                                                  APIData,
                                                  $q,
                                                  UserResponse,
                                                  $location) {
        $scope.editUserResponse = true;
        $scope.userresponse = {};
        var promises = [];
        promises[0] = Usernames.getList();
        promises[1] = APIS.getList();
        promises[2] = APIData.getList();
        promises[3] = UserResponse.one($routeParams.id).get();
        $q.all(promises).then(function (allData) {
            $scope.usernames = allData[0];
            $scope.ids = allData[1];
            $scope.apidatas = allData[2];
            var userresponse = allData[3];
            $scope.userresponse = userresponse;
            for (var i = 0; i < $scope.usernames.length; i++) {
                if (userresponse.userId === $scope.usernames[i]._id) {
                    $scope.selectedUserName = $scope.usernames[i];
                    break;
                }
            }
            for (i = 0; i < $scope.ids.length; i++) {
                if (userresponse.apiId === $scope.ids[i]._id) {
                    $scope.selectedId = $scope.ids[i];
                    break;
                }
            }
            for (i = 0; i < $scope.apidatas.length; i++) {
                if (userresponse.apiDataId === $scope.apidatas[i]._id) {
                    $scope.selectedDataItem = $scope.apidatas[i];
                    break;
                }
            }
            $scope.saveUserResponse = function () {
                $scope.userresponse.save().then(function () {
                    $location.path('/userresponse/' + $routeParams.id);
                });
            };
        });
    });
