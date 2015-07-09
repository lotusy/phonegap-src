
// GLOBAL HELPERS

var randomize = function(constant){return Math.round(Math.random()*constant);}

var Foodster = angular.module("Foodster", ['ngAnimate']);

Foodster.directive('navBar', function() {return {templateUrl: 'directives/nav-bar.html'};});
Foodster.directive('homePage', function() {return {templateUrl: 'directives/home-page.html',controller:'HomePageController'};});

Foodster.controller('MainController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
    $rootScope.AppLocation = 'Discover';
}]);
Foodster.controller('HomePageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
    $rootScope.AppLocation = '';

    var fallingFoodContainer = $('#falling-food-container');
    var generateFood = function(number){
        if(number == 0) return;
        var item = '../../assets/home_screen/foodsbg-'+(randomize(14)+1)+'.png';
        var xPos = randomize(window.innerWidth+200)-100;
        fallingFoodContainer.append($('<div class="falling-food" style="left:'+xPos+'px; background-image:url('+item+')"></div>'));
        setTimeout(function(){
            generateFood(number-1);
        },8000);
    };
    generateFood(20);

    $scope.dishesTriedDisplay = 0;

    $scope.dishesTried = 365;

    var tickDishes = function(){
        if($scope.dishesTriedDisplay < $scope.dishesTried){
            $scope.$apply($scope.dishesTriedDisplay+=1);
            setTimeout(tickDishes, 1000/$scope.dishesTried);
        }
        else{
            $scope.dishesTriedDisplay = $scope.dishesTried;
            $('#dishesTried').addClass('animated tada');
        }
    };
    tickDishes();
}]);