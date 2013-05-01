
/* Controllers */


//MainCtrl.$inject = [$scope, $navigate];
function AppCtrl($scope, $navigate, analytics) {
    $scope.$navigate = $navigate;
    $navigate.go('/','none');
}



function SignupCtrl($scope, $http, $navigate, meetingSvc, analytics) {
    $scope.pageTitle = "Signup";
}


function RateCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "Rate";
}

function RewardsCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "Rate Reward";
}


function HomeCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function ProfileCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function SOSSignalCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function NewsCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function VideoCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function ReadingCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function PHelpCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function DailyDoseCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function BuddyPodCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function MembersCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

function EventsCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}


/* ALL THE OTHER CONTROLLER PAGES I NEED TO DEMO 


function MusicCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}


function MeetingsCtrl($scope, $http, $navigate) {
    $scope.pageTitle = "";
}

*/ 




function TestAppCtrl($scope, $navigate) {
    $scope.$navigate = $navigate;
    $navigate.go('/','none');


    angular.extend($scope, {
        mapCenter: { lat: 40.763562, lng: -73.971401 },
//        marker: { lat: 40.763562, lng: -73.9 },
//        message: "Drag me to your node position",
        mapZoom: 11
    });
    console.log("testAppctrl");
    $scope.mapOptions = {
//        center: new L.LatLng(40.763562, -73.971401),
        zoom: 14
//        layers: null,
//        minZoom: null,
//        maxZoom: null,
//        ,maxBounds: new L.LatLngBounds()
    };
}
