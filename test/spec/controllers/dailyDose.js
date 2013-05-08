'use strict';

describe('Controller: DailyDoseCtrl', function () {

  // load the controller's module
  beforeEach(module('addicaidApp'));

  var DailyDoseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailyDoseCtrl = $controller('DailyDoseCtrl', {
      $scope: scope
    });
  }));

});
