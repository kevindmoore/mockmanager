'use strict';

describe('Controller: UserresponseAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserresponseAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserresponseAddCtrl = $controller('UserresponseAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserresponseAddCtrl.awesomeThings.length).toBe(3);
  });
});
