'use strict';

angular.module('addicaidApp', ['ajoslin.mobile-navigate', 'angular-leaflet', 'ui', 'ui.bootstrap'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', { // default
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/meetingList', {
        templateUrl: 'views/meetingList.html',
        controller: 'MeetingListCtrl'
      })
      .when('/filter', {
        templateUrl: 'views/filter.html',
        controller: 'FilterCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/rate', {
        templateUrl: 'views/rate.html',
        controller: 'RateCtrl'
      })
      .when('/rateReward', {
        templateUrl: 'views/rateReward.html',
        controller: 'RateRewardCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl'
      })
      .when('/reading', {
        templateUrl: 'views/reading.html',
        controller: 'ReadingCtrl'
      })
      .when('/professionalHelp', {
        templateUrl: 'views/professionalHelp.html',
        controller: 'ProfessionalHelpCtrl'
      })
      .when('/dailyDose', {
        templateUrl: 'views/dailyDose.html',
        controller: 'DailyDoseCtrl'
      })
      .when('/buddyPod', {
        templateUrl: 'views/buddyPod.html',
        controller: 'BuddyPodCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/members', {
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/signalSOS', {
        templateUrl: 'views/signalSOS.html',
        controller: 'SignalSOSCtrl'
      })
      .when('/meetingList/:meetingID/:showComments', {
        templateUrl: 'views/meetingDetailPage.html',
        controller: 'MeetingDetailPageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])

  // load the $navigate (angular-mobile-nav) service for all controllers
  .run(['$rootScope', '$navigate', function($rootScope, $navigate) {
    $rootScope.$navigate = $navigate;

    // shared vars at the rootScope level
    $rootScope.sharedVars = {
      pageTitle: ''
    };
  }])

  // TODO: this needs to get out of rootScope
  .run(['$rootScope', function($rootScope) {
    $rootScope.getPartialUrl = function(partial) { // DONE: jasmine
      var src = '';
      switch (partial) {
      case 'header':
        src = 'views/header.html';
        break;
      case 'footer':
        src = 'views/footer.html';
        break;
      case 'meetingDetailSmall':
        src = 'views/meetingDetailSmall.html';
        break;
      case 'testSwitchStatement': // used for unit testing
        src = 'testUrlHere';
        break;
      default:
        src = 'views/' + partial + '.html';
        break;
      }
      return src;
    };

    $rootScope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

    $rootScope.getFellowshipID = function(fellowshipName) {
      var id = '';
      switch (fellowshipName) {
      case 'AlcoholicsAnonymous':
        id = 'AA';
        break;
      case 'NarcoticsAnonymous':
        id = 'NA';
        break;
      }
      return id;
    };
    $rootScope.parseAddress = function(address, part) {
      var result = address.split('\n')[part - 1];
      if (angular.isUndefined(result)) {
        result = '';
      }
      return result;
    };
    $rootScope.formatTime = function(time) {
      return angular.isUndefined(time) ? '' : time;
    };
    $rootScope.formatDay = function(day) {
      return day.substr(0, 3);
    };
    $rootScope.formatDistance = function(distance) {
      var result = parseFloat(distance);
      var units = (result === '1') ? 'MILE' : 'MILES';
      if (isFinite(result)) {
        result = result + ' ' + units;
      } else {
        result = null;
      }
      return result;
    };
    $rootScope.getStarImgSrc = function(isFavorite) {
      return isFavorite ? 'images/star_icon_on.png' : 'images/star_icon.png';
    };
    $rootScope.toggleFavorite = function(meeting) {
      meeting.isFavorite = !meeting.isFavorite;
    };


    $rootScope.getRatingViewObject = function(rating) {
      // params(rating) is one of twelve ratings
      // params(isActive) is boolean, whether rating is visible
      var cssClass = '';
      var imgFilename = ''; // without the .png
      var displayText = '';

      switch (rating) {
      case 'forYoungPeople':
        cssClass = 'young_people';
        imgFilename = 'young_people';
        displayText = 'young people';
        break;
      case 'isLgbt':
        cssClass = 'lgbt';
        imgFilename = 'lgbt';
        displayText = 'lgbt';
        break;
      case 'forWomen':
        cssClass = 'womens';
        imgFilename = 'womens';
        displayText = 'womens';
        break;
      case 'forNewcomer':
        cssClass = 'newcomer';
        imgFilename = 'newcomer';
        displayText = 'newcomer';
        break;
      case 'outsidersWelcome':
        cssClass = 'outsiders';
        imgFilename = 'outsiders';
        displayText = 'outsiders welcome';
        break;
      case 'hasWheelchairAccess':
        cssClass = 'wheelchair';
        imgFilename = 'wheelchair';
        displayText = 'wheelchair';
        break;
      case 'petsAllowed':
        cssClass = 'pets';
        imgFilename = 'pets';
        displayText = 'pets allowed';
        break;
      case 'isHasSnacks':
        cssClass = 'snacks';
        imgFilename = 'snacks';
        displayText = 'snacks';
        break;
      case 'isLargeGroup':
        cssClass = 'large_group';
        imgFilename = 'large_group';
        displayText = 'large group';
        break;
      case 'isHasMeditation':
        cssClass = 'meditation';
        imgFilename = 'meditation';
        displayText = 'meditation';
        break;
      case 'isForMen':
        cssClass = 'mens';
        imgFilename = 'mens';
        displayText = 'mens';
        break;
      case 'hasCoffee':
        cssClass = 'coffee';
        imgFilename = 'coffee';
        displayText = 'coffee';
        break;
      default:
        console.log('ERROR: unknown rating (' + rating + ') in getRatingViewObject');
      }

      return {
        cssClass: cssClass,
        imgSrc: imgFilename === '' ? '' : 'images/'+ imgFilename + '.png',
        displayText: displayText
      };
    };
  }]);
