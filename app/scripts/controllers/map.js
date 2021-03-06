'use strict';

angular.module('addicaidApp')
  .controller('MapCtrl', ['$scope', '$rootScope', '$filter', 'meetingSvc', 'filterSvc', 'geolocationBrowser', function($scope, $rootScope, $filter, meetingSvc, filterSvc, geolocation) {
    $rootScope.sharedVars.pageTitle = 'Map';

//    $scope.$apply(function() {
    geolocation.getCurrentLocation().then(function(coords) {
      // map options
      $scope.currentLatLng = L.latLng(coords.latitude, coords.longitude);
      $scope.mapOptions = {
        center: $scope.currentLatLng,
        zoom: 13,
        markers: [
          L.marker($scope.currentLatLng, { icon: L.icon({iconUrl: 'images/heremap.png'})})
        ]
      };
    });
//    });


    $scope.openPop = function() {
      console.log('openPop function');
    };


    var addMarkerOptions = function(meetings) {
      for (var i = 0; i < meetings.length; i++) {
        var icon = L.Icon.Default;

        var fellowshipID = $scope.getFellowshipID(meetings[i].fellowship.name);
        var suffix;
        if (meetingSvc.isMeetingStartingSoon(meetings[i])) {
          suffix = 'soon';
        } else {
          suffix = 'map';
        }
        var iconUrl = 'images/' + fellowshipID + suffix + '.png';

        if (fellowshipID !== '') {
          icon = L.icon({ iconUrl: iconUrl });
        }
        var markerOptions = {
          icon: icon
        };
        angular.extend(meetings[i], { markerOptions: markerOptions });
      }

      return meetings;
    };

    $scope.markerPopupContentOpts = {
//        maxWidth: 400,
      maxHeight: 1000
    };
    $scope.markerPopupContentFn = function(meeting) {
      var popupContent = '' +
        '<hgroup class="grids grid-7">' +
        '    <h3>' + meeting.title + ' <span class="meetinglocation">(' + meeting.latLon.locationName + ')</span></h3>' +
//            '    <h3>' + meeting.title + '</h3>' +
//            '    <span class="meetinglocation">(' + meeting.latLon.locationName + ')</span>' +
        '    <h4>' + $scope.parseAddress(meeting.address, 1) + '</h4>' +
        '    <h4>' + $scope.parseAddress(meeting.address, 2) + '</h4>' +
        '</hgroup>' +
        '<aside class="grids grid-4 right_side map-popup ' + $scope.getFellowshipID(meeting.fellowship.name) + '">' +
        '    <div class="timeandday map-popup">' +
        '        <p class="time">' + $scope.formatTime(meeting.time) + '</p>' +
        '        <p class="day">' + $scope.formatDay(meeting.day) + '</p>' +
        '        <span class="distance">' + $scope.formatDistance(meeting.distance) + '</span>' +
        '    </div>' +
        '</aside>';

      return popupContent;
    };

    // meetings
    $scope.$on(meetingSvc.meetingsChangedEvent, function(event, args) {
      console.log('MapCtrl#on#meetings changed', event, args);
      $scope.meetings = addMarkerOptions($filter('andOrFilter')(meetingSvc.getMeetings('map-on'), filterSvc.filtersToApply()));

    });
    $scope.meetings = addMarkerOptions($filter('andOrFilter')(meetingSvc.getMeetings('map'), filterSvc.filtersToApply()));

  }]);
