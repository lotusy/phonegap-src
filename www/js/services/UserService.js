Foodster.factory('UserService', ['FoodItemService', function(FoodItemService) {

    var UserService = {};
    UserService.collectedDishes = {
        102: {like: true}
    };
    UserService.hitlist = [
        '103'
    ];
    UserService.isInHitlist = function(id){
        return UserService.hitlist.indexOf(id) > -1;
    };
    UserService.getFoodStatus = function(id){
        if(UserService.collectedDishes[id]){
            return UserService.collectedDishes[id] ? 'like' : 'dislike';
        }
        else if(UserService.isInHitlist(id)){
            return 'hitlist';
        }
        else return '';
    };
    return UserService;
}]);