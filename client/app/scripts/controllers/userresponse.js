'use strict';

function getUserName(Usernames, userResponse, currentResponse) {
    Usernames.one().get(userResponse.userId).then(function (username) {
        for (var i = 0; i < username.length; i++) {
            if (userResponse.userId === username[i]._id) {
                currentResponse.username = username[i];
                break;
            }
        }
    });
}
function getAPI(APIS, userResponse, currentResponse) {
    APIS.one().get(userResponse.userId).then(function (api) {
        for (var i = 0; i < api.length; i++) {
            if (userResponse.apiId === api[i]._id) {
                currentResponse.api = api[i];
                break;
            }
        }
    });
}
function getAPIData(APIData, userResponse, currentResponse) {
    APIData.one().get(userResponse.userId).then(function (apiData) {
        for (var i = 0; i < apiData.length; i++) {
            if (userResponse.apiDataId === apiData[i]._id) {
                currentResponse.apiData = apiData[i];
                break;
            }
        }
    });
}

/**
 * @ngdoc function
 * @name clientApp.controller:UserresponseCtrl
 * @description
 * # UserresponseCtrl
 * Controller of the clientApp
 */

angular.module('clientApp')
    .controller('UserresponseCtrl', function ($scope,
                                              Usernames,
                                              APIS,
                                              APIData,
                                              UserResponse) {
        UserResponse.getList().then(function (userresponses) {
            $scope.userresponses = [];
             for (var j=0; j < userresponses.length; j++) {
                var response = {};
                $scope.userresponses[$scope.userresponses.length] = response;
                var userResponse = userresponses[j];
                $scope.currentResponse = userResponse;
                response._id = userResponse._id;
                getUserName(Usernames, userResponse, response);
                getAPI(APIS, userResponse, response);
                getAPIData(APIData, userResponse, response);
            }
        });
    });

