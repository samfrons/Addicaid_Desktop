'use strict';

describe('Controller: SignalSOSCtrl', function () {

  // load the controller's module
  beforeEach(module('addicaidApp'));

  var SignalSOSCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignalSOSCtrl = $controller('SignalSOSCtrl', {
      $scope: scope
    });
  }));

});
