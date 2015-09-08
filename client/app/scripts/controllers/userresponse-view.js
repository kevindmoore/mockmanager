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
 * @name clientApp.controller:UserresponseViewCtrl
 * @description
 * # UserresponseViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('UserresponseViewCtrl', function ($scope,
                                                  Usernames,
                                                  APIS,
                                                  APIData,
                                                  $routeParams,
                                                  UserResponse) {
        $scope.viewUserResponse = true;
        UserResponse.one($routeParams.id).get().then(function (userresponse) {
            $scope.userresponse = userresponse;
            getUserName(Usernames, userresponse, $scope.userresponse);
            getAPI(APIS, userresponse, $scope.userresponse);
            getAPIData(APIData, userresponse, $scope.userresponse);
        });
    });