'use strict';

describe('Controller: ReadingCtrl', function () {

  // load the controller's module
  beforeEach(module('addicaidApp'));

  var ReadingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReadingCtrl = $controller('ReadingCtrl', {
      $scope: scope
    });
  }));

});
