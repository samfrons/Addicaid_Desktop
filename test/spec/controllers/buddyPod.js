'use strict';

describe('Controller: BuddyPodCtrl', function () {

  // load the controller's module
  beforeEach(module('addicaidApp'));

  var BuddyPodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuddyPodCtrl = $controller('BuddyPodCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
