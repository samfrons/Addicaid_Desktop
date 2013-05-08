'use strict';

angular.module('addicaidApp')
  .directive('ngTap', [function() {
    var isTouchDevice = !!('ontouchstart' in window);
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        if (isTouchDevice) {
          var tapping = false;
          element.bind('touchstart', function() { tapping = true; });
          element.bind('touchmove', function() { tapping = false; });
          element.bind('touchend', function() {
            /* jshint -W030 */
            // TODO: although there is probably a way to do following line without breaking jshint
            tapping && scope.$apply(attrs.ngTap);
          });
        } else {
          element.bind('click', function() {
            scope.$apply(attrs.ngTap);
          });
        }
      }
    };
  }]);


//(function(angular) {
//  'use strict';
//
//  angular.module('addicaidApp')
//  .directive('ngTap', [function() {
//    return function(scope, element, attrs) {
//      var tapping;
//      tapping = false;
//      element.bind('touchstart', function(e) {
//        element.addClass('active');
//        tapping = true;
//      });
//      element.bind('touchmove', function(e) {
//        element.removeClass('active');
//        tapping = false;
//      });
//      element.bind('touchend', function(e) {
//        element.removeClass('active');
//        if (tapping) {
//          scope.$apply(attrs['ngTap'], element);
//        }
//      });
//    };
//  }]);
//})(angular);
