'use strict';

angular.module('addicaidApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.sharedVars.pageTitle = 'Signup';

    $scope.slides = [{
      active: true
    },{
      active: false
    },{
      active: false
    },{
      active: false
    },{
      active: false
    },{
      active: false
    },{
      active: false
    }];
  }]);
