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
            CurrentUser.getList().then(function(username) {
                if (username) {
                    $scope.currentUser = username;
                }
                if (username.length > 0) {
                    $scope.selectedUser = username[0];
                }
            });
        });
        $scope.updateCurrentUser = function () {
            if ($scope.currentUser && $scope.currentUser.length > 0) {
                $scope.currentUser.remove($scope.currentUser[0]._id);
            }
            var currentUser = { 'name' : $scope.selectedUser.name.name};
            CurrentUser.post(currentUser);
        };

    });
