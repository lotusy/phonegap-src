Foodster.controller('NewItemModuleController', ['$scope', '$rootScope', '$http', 'RestaurantService', 'UserService', 'FoodItemService', function($scope, $rootScope, $http, RestaurantService, UserService, FoodItemService){
    $scope.nearbyRestaurants = RestaurantService.getNearbyRestaurants();

    $scope.showAddItem = false;

    var backStack = [
        function(){$rootScope.ActiveModule = 'HOME'},
        function(){$scope.restaurant = null},
        function(){$scope.dish = null}
    ];
    var stackPos = 0;
    $scope.back = function(){
        backStack[stackPos]();
        if(stackPos > 0)stackPos--;
    };
    $rootScope.setBack('NEWITEMMODULE', $scope.back);
    $scope.restaurant = null;
    $scope.dish = null;

    $scope.getProgress = function(){
        if($scope.restaurant == null){
            return '';
        }
        else if ($scope.dish == null){
            return 'restaurant';
        }
        else return 'dish';
    };
    $scope.getFoodStatus = function(id){
        return UserService.getFoodStatus(id);
    }
    $scope.selectRestaurant = function(id){
        $scope.showAddItem = false;
        $scope.restaurant = RestaurantService.getRestaurantObject(id);
        setTimeout(function(){
            $scope.showAddItem = true;
            $scope.$apply();
        }, 100*($scope.restaurant.dishes.length));
        stackPos++;
    };
    $scope.selectDish = function(dish){
        $scope.dish = dish;
        stackPos++;
    }
    $scope.getFoodImage = function(id){
        var url = FoodItemService.getImage(id);
        if (url){
            return {'background-image' : 'url('+url+')'};
        }
        else return '';
    }
}]);
