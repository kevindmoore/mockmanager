'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserresponseAddCtrl
 * @description
 * # UserresponseAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserresponseAddCtrl', function (    $scope,
                                                   Usernames,
                                                   APIS,
                                                   APIData,
                                                   UserResponse,
                                                   $location
    ) {
      $scope.addUserResponse = true;
      $scope.userresponse = {};
      Usernames.getList().then(function(usernames) {
        $scope.usernames = usernames;
        $scope.selectedUserName = usernames[0];
      });
      APIS.getList().then(function(ids) {
        $scope.ids = ids;
        $scope.selectedId = ids[0];
      });
      APIData.getList().then(function(apidatas) {
        $scope.apidatas = apidatas;
        $scope.selectedDataItem = apidatas[0];
      });

      $scope.saveUserResponse = function() {
        $scope.userresponse.userId = $scope.selectedUserName._id;
        $scope.userresponse.apiId = $scope.selectedId._id;
        $scope.userresponse.apiDataId = $scope.selectedDataItem._id;
        UserResponse.post($scope.userresponse).then(function() {
          $location.path('/userresponse');
        });
      };
    });
