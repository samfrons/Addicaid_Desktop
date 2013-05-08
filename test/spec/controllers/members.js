'use strict';

describe('Controller: MembersCtrl', function () {

  // load the controller's module
  beforeEach(module('addicaidApp'));

  var MembersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembersCtrl = $controller('MembersCtrl', {
      $scope: scope
    });
  }));

});
