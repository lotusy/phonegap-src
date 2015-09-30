
// GLOBAL HELPERS
var randomize = function(constant){return Math.round(Math.random()*constant);}

var ENV = 'int';
var BASEURL = "api.foodster.club/rest";
var ApiUrl = 'http://'+ENV+'.'+BASEURL;


var Foodster = angular.module("Foodster", ['angular-gestures', 'ngAnimate', 'ngTouch', 'ngCordova'])
    .config(function($locationProvider, $httpProvider, $cordovaFacebookProvider) {

        var appID = 942902509107981;
        var version = "v2.0"; // or leave blank and default is v2.0
        $cordovaFacebookProvider.browserInit(appID, version);

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $httpProvider.defaults.headers = {
            'Content-Type': 'application/json',
            'app-key': '9D0E7CE8711F6F1CF87704557828A16E'
        };
    });

Foodster.directive('login', function() {return {templateUrl: 'directives/login.html', controller:'LoginController'};});
Foodster.directive('navBar', function() {return {templateUrl: 'directives/nav-bar.html'};});
Foodster.directive('homePage', function() {return {templateUrl: 'directives/home-page.html',controller:'HomePageController'};});
Foodster.directive('newItemModule', function() {return {templateUrl: 'directives/new-item-module.html',controller:'NewItemModuleController'};});

Foodster.controller('MainController', ['$scope', '$rootScope', '$http', '$location', '$window', 'UserService', function($scope, $rootScope, $http, $location, $window, UserService){
    //$rootScope.ActiveModule = 'NEWITEMMODULE';
    //$scope.$on('$routeUpdate', function(){
    //});
    $rootScope.ActiveModule = 'LOGIN';
    $rootScope.PreviousModule = [];

    $rootScope.navbarMap = {};
    $scope.LocationMap = {
        'HOME' : '',
        'NEWITEMMODULE' : 'NEW ITEM TRIED'
    };

    $window.fbAsyncInit = function() {
        // Executed when the SDK is loaded

        FB.init({

            /*
             The app id of the web app;
             To register a new app visit Facebook App Dashboard
             ( https://developers.facebook.com/apps/ )
             */

            appId: '942902509107981',

            /*
             Adding a Channel File improves the performance
             of the javascript SDK, by addressing issues
             with cross-domain communication in certain browsers.
             */

            channelUrl: 'app/channel.html',

            /*
             Set if you want to check the authentication status
             at the start up of the app
             */

            status: true,

            /*
             Enable cookies to allow the server to access
             the session
             */

            cookie: true,

            /* Parse XFBML */

            xfbml: true
        });

        UserService.watchLoginChange();
    };

    $rootScope.setBack = function(module, fn){
        if(!$rootScope.navbarMap[module])
        $rootScope.navbarMap[module] = {};
        $rootScope.navbarMap[module].back = fn;
    };
    $rootScope.goBack = function(){
        if($rootScope.navbarMap[$rootScope.ActiveModule]){
            $rootScope.navbarMap[$rootScope.ActiveModule].back();
        }
        else
            $rootScope.ActiveModule = $rootScope.PreviousModule.pop();
    };
    $rootScope.changeModule = function(module){
        $rootScope.PreviousModule.push($rootScope.ActiveModule);
        $rootScope.ActiveModule = module;
    }
}]);

// JQuery pluggables
//slider
