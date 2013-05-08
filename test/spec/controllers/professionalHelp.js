'use strict';

describe('Controller: ProfessionalHelpCtrl', function () {

  // load the controller's module
  beforeEach(module('addicaidApp'));

  var ProfessionalHelpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfessionalHelpCtrl = $controller('ProfessionalHelpCtrl', {
      $scope: scope
    });
  }));

});
