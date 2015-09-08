'use strict';

describe('Controller: ApiAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ApiAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiAddCtrl = $controller('ApiAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApiAddCtrl.awesomeThings.length).toBe(3);
  });
});
