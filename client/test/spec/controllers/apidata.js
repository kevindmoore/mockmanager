'use strict';

describe('Controller: ApidataCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ApidataCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApidataCtrl = $controller('ApidataCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApidataCtrl.awesomeThings.length).toBe(3);
  });
});
