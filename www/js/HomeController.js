Foodster.controller('HomePageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
    $rootScope.AppLocation = 'Discover';
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
    //generateFood(20);

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
    $scope.beadEaten = 0;
    $scope.resetSwiper = function(){
        $scope.beadEaten = 0;
        $scope.swiped = false;
        $scope.$apply();
    };
    $scope.swipedAddDish = function(){
        var eatBeads = function(bead){
            if(bead > 4){
                $rootScope.changeModule('NEWITEMMODULE');
                setTimeout($scope.resetSwiper,1000);
                return;
            }
            else{
                console.log($scope.beadEaten);
                $scope.beadEaten++;
                $scope.$apply();
                setTimeout(function() {
                    eatBeads(bead + 1);
                },200);
            }
        };
        eatBeads(0);
        $scope.swiped = true;
    }
}]);