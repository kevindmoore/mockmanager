'use strict';

describe('Controller: ApidataEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ApidataEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApidataEditCtrl = $controller('ApidataEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApidataEditCtrl.awesomeThings.length).toBe(3);
  });
});
