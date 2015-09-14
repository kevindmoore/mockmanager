'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UsernameCtrl
 * @description
 * # UsernameCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('UsernameCtrl', function ($scope,
                                          Usernames,
                                          CurrentUser
    ) {
        Usernames.getList().then(function(usernames) {
            $scope.usernames = usernames;
            CurrentUser.getList().then(function(currentUser) {
                if (currentUser && currentUser.length > 0) {
                    $scope.currentUser = currentUser[0];
                    for (var i=0; i < $scope.usernames.length; i++) {
                      if ($scope.usernames[i]._id === currentUser[0].userId) {
                        $scope.selectedUser = $scope.usernames[i];
                        break;
                      }
                    }
                }
            });
        });
        $scope.updateCurrentUser = function () {
            if ($scope.currentUser) {
                $scope.currentUser.remove($scope.currentUser._id);
            }
            var newCurrentUser = { 'name' : $scope.selectedUser.name, 'userId': $scope.selectedUser._id};
            CurrentUser.post(newCurrentUser);
        };

    });
