
// GLOBAL HELPERS

var randomize = function(constant){return Math.round(Math.random()*constant);}

var ENV = 'int';
var BASEURL = "api.foodster.club/rest";
var ApiUrl = 'http://'+ENV+'.'+BASEURL;


var Foodster = angular.module("Foodster", ['ngAnimate', 'ngTouch'])
    .config(function($locationProvider, $httpProvider) {
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

Foodster.controller('MainController', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location){
    //$rootScope.ActiveModule = 'NEWITEMMODULE';
    //$scope.$on('$routeUpdate', function(){
    //});
    $rootScope.ActiveModule = 'HOME';
    $rootScope.PreviousModule = [];

    $rootScope.navbarMap = {};
    $scope.LocationMap = {
        'HOME' : '',
        'NEWITEMMODULE' : 'NEW ITEM TRIED'
    };
    $rootScope.setBack = function(module, fn){
        if(!$rootScope.navbarMap[module])
        $rootScope.navbarMap[module] = {};
        $rootScope.navbarMap[module].back = fn;
    }
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
