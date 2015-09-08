'use strict';

describe('Controller: ApidataViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ApidataViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApidataViewCtrl = $controller('ApidataViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApidataViewCtrl.awesomeThings.length).toBe(3);
  });
});
