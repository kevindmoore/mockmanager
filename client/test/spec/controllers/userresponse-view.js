'use strict';

describe('Controller: UserresponseViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserresponseViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserresponseViewCtrl = $controller('UserresponseViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserresponseViewCtrl.awesomeThings.length).toBe(3);
  });
});
