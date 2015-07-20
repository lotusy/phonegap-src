Foodster.factory('FoodItemService', function(){
    var FoodItemService = {};
    var dishes = {
        '101' : {name: "Salmon Sashimi", cuisine: "Japanese", category: 'entree', price: 3.75},
        '102' : {name: "Alaska Roll", cuisine: "Japanese", category: 'entree', price: 3.75},
        '103' : {name: "California Roll", cuisine: "Japanese", category: 'entree', price: 3.75},
        '104' : {name: "Assorted Sashimi Deluxe", cuisine: "Japanese", category: 'entree', price: 3.75},
        '105' : {name: "Crazy Dynamite Roll Combo Saiyan", cuisine: "Japanese", category: 'entree', price: 3.75}
    }

    FoodItemService.getImage = function(id){
        if(id == '103')
            return '../../assets/testfood.jpg';
        else return '';
    };
    return FoodItemService;
});