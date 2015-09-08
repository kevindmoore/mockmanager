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
                                                UserResponse,
                                                $location) {
      $scope.editUserResponse = true;
      $scope.userresponse = {};
      Usernames.getList().then(function(usernames) {
        $scope.usernames = usernames;
      });
      APIS.getList().then(function(ids) {
        $scope.ids = ids;
      });
      APIData.getList().then(function(apidatas) {
        $scope.apidatas = apidatas;
      });
      UserResponse.one($routeParams.id).get().then(function (userresponse) {
        $scope.userresponse = userresponse;
        for (var i=0; i < $scope.usernames.length; i++) {
          if (userresponse.userId === $scope.usernames[i]._id) {
            $scope.selectedUserName = $scope.usernames[i];
            break;
          }
        }
        for (i=0; i < $scope.ids.length; i++) {
          if (userresponse.apiId === $scope.ids[i]._id) {
            $scope.selectedId = $scope.ids[i];
            break;
          }
        }
        for (i=0; i < $scope.apidatas.length; i++) {
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
