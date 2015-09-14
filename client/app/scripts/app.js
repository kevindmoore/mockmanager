'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
    .module('clientApp', [
        'ngRoute',
        'restangular'
    ])
    .config(function ($routeProvider, RestangularProvider) {

        // Set the base URL for Restangular.
        RestangularProvider.setBaseUrl('http://localhost:3000');

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'main'
            })
            .when('/usernames', {
                templateUrl: 'views/usernames.html',
                controller: 'UsernameCtrl'
            })
            .when('/create/usernames', {
                templateUrl: 'views/usernames-add.html',
                controller: 'UsernamesAddCtrl'
            })
            .when('/usernames/:id', {
                templateUrl: 'views/usernames-view.html',
                controller: 'UsernamesViewCtrl'
            })
            .when('/usernames/:id/delete', {
                templateUrl: 'views/usernames-delete.html',
                controller: 'UsernamesDeleteCtrl'
            })
            .when('/usernames/:id/edit', {
                templateUrl: 'views/usernames-edit.html',
                controller: 'UsernamesEditCtrl'
            })
            .when('/apis', {
                templateUrl: 'views/apis.html',
                controller: 'ApisCtrl'
            })
            .when('/apis/:id/edit', {
                templateUrl: 'views/api-edit.html',
                controller: 'ApiEditCtrl'
            })
            .when('/apis/:id/delete', {
                templateUrl: 'views/api-delete.html',
                controller: 'ApiDeleteCtrl'
            })
            .when('/apis/:id', {
                templateUrl: 'views/api-view.html',
                controller: 'ApiViewCtrl'
            })
            .when('/create/api', {
                templateUrl: 'views/api-add.html',
                controller: 'ApiAddCtrl'
            })
            .when('/apidata/:id/edit', {
                templateUrl: 'views/apidata-edit.html',
                controller: 'ApidataEditCtrl'
            })
            .when('/apidata/:id/delete', {
                templateUrl: 'views/apidata-delete.html',
                controller: 'ApidataDeleteCtrl'
            })
            .when('/apidata/:id', {
                templateUrl: 'views/apidata-view.html',
                controller: 'ApidataViewCtrl'
            })
            .when('/create/apidata', {
                templateUrl: 'views/apidata-add.html',
                controller: 'ApidataAddCtrl'
            })
            .when('/apidata', {
                templateUrl: 'views/apidata.html',
                controller: 'ApidataCtrl'
            })
            .when('/userresponse', {
                templateUrl: 'views/userresponse.html',
                controller: 'UserresponseCtrl'
             })
            .when('/create/userresponse', {
                templateUrl: 'views/userresponse-add.html',
                controller: 'UserresponseAddCtrl'
            })
            .when('/userresponse/:id', {
                templateUrl: 'views/userresponse-view.html',
                controller: 'UserresponseViewCtrl'
            })
            .when('/userresponse/:id/delete', {
                templateUrl: 'views/userresponse-delete.html',
                controller: 'UserresponseDeleteCtrl'
            })
            .when('/userresponse/:id/edit', {
                templateUrl: 'views/userresponse-edit.html',
                controller: 'UserresponseEditCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('MockRestangular', function (Restangular) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({
                id: '_id'
            });
        });
    })
    .factory('Usernames', function (MockRestangular) {
        return MockRestangular.service('usernames');
    })
    .factory('APIData', function (MockRestangular) {
        return MockRestangular.service('apidata');
    })
    .factory('UserResponse', function (MockRestangular) {
        return MockRestangular.service('userresponse');
    })
    .factory('CurrentUser', function (MockRestangular) {
        return MockRestangular.service('currentuser');
    })
    .factory('APIS', function (MockRestangular) {
        return MockRestangular.service('apis');
    });
