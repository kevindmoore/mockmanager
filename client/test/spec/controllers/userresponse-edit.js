'use strict';

describe('Controller: UserresponseEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var UserresponseEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserresponseEditCtrl = $controller('UserresponseEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserresponseEditCtrl.awesomeThings.length).toBe(3);
  });
});
