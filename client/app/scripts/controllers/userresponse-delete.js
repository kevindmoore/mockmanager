'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserresponseDeleteCtrl
 * @description
 * # UserresponseDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserresponseDeleteCtrl', function ($scope,
                                                  $routeParams,
                                                  UserResponse,
                                                  $location) {
      $scope.userresponse = UserResponse.one($routeParams.id).get().$object;
      $scope.deleteUserResponse = function () {
        $scope.userresponse.remove().then(function () {
          $location.path('/userresponse');
        });
      };
      $scope.back = function () {
        $location.path('/userresponse/' + $routeParams.id);
      };
    });
