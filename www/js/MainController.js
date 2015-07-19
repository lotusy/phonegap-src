
// GLOBAL HELPERS

var randomize = function(constant){return Math.round(Math.random()*constant);}

var Foodster = angular.module("Foodster", ['ngAnimate', 'ngTouch']);

Foodster.directive('navBar', function() {return {templateUrl: 'directives/nav-bar.html'};});
Foodster.directive('homePage', function() {return {templateUrl: 'directives/home-page.html',controller:'HomePageController'};});
Foodster.directive('newItemModule', function() {return {templateUrl: 'directives/new-item-module.html',controller:'NewItemModuleController'};});

Foodster.controller('MainController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
    //$rootScope.ActiveModule = 'NEWITEMMODULE';
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
