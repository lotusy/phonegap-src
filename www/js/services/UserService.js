Foodster.factory('UserService', ['FoodItemService', '$http', function(FoodItemService, $http) {


    var UserService = {};

    UserService.watchLoginChange = function() {

        var _self = this;

    };
    UserService.login = function(token, type){
        $http({method: 'POST', url: ApiUrl+'/token/auth/'+type})
            .success(function(res){
                response = res;
            })
            .error(function(err){response = err});
    };
    UserService.getLastName = function() {
        var deferred = $q.defer();
        FB.api('/me', {
            fields: 'last_name'
        }, function(response) {
            if (!response || response.error) {
                deferred.reject('Error occured');
            } else {
                deferred.resolve(response);
            }
        });
        return deferred.promise;
    };
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