'use strict';

describe('Controller: ApiViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ApiViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiViewCtrl = $controller('ApiViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApiViewCtrl.awesomeThings.length).toBe(3);
  });
});
