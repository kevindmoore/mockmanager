'use strict';

describe('Controller: UserresponseDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserresponseDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserresponseDeleteCtrl = $controller('UserresponseDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserresponseDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
