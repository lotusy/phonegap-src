Foodster.factory('RestaurantService', ['FoodItemService', function(FoodItemService){
    var RestaurantService = {};

    // TEMPORARY BACKEND INSTANCE
    // Load Data

    // Fake Restaurant DB
    localStorage.removeItem('Restaurants');
    var Restaurants = localStorage['Restaurants'];
    if(!Restaurants){
        Restaurants = [
            {
                name: 'Sushi Garden',
                type: 'Japanese | take-out',
                dishes : [
                    {id: '101', name: "Salmon Sashimi", cuisine: "Japanese", category: 'entree', price: 3.75},
                    {id: '102', name: "Alaska Roll", cuisine: "Japanese", category: 'entree', price: 3.75},
                    {id: '103', name: "California Roll", cuisine: "Japanese", category: 'entree', price: 3.75},
                    {id: '104', name: "Assorted Sashimi Deluxe", cuisine: "Japanese", category: 'entree', price: 3.75},
                    {id: '105', name: "Crazy Dynamite Roll Combo Saiyan", cuisine: "Japanese", category: 'entree', price: 3.75}
                ],
                location: "",
                address: "4652 Kingsway, Burnaby, BC"
            },
            {name: 'Milestones',type: 'American',dishes : [],location: "",address: ""},
            {name: 'Earls',type: 'American',dishes : [],location: "",address: ""},
            {name: "Hon's Wonton House",type: 'Chinese',dishes : [],location: "",address: ""},
            {name: 'Samurai Sushi',type: 'Japanese',dishes : [],location: "",address: ""},
            {name: 'Kamamarui',type: 'Japanese',dishes : [],location: "",address: ""},
            {name: 'Ramen Jinya',type: 'Japanese',dishes : [],location: "",address: ""}
        ]
    }


    var currentLocation = {};

    RestaurantService.getNearbyRestaurants = function(){
        function showPosition(position) {
            currentLocation = position;
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            return 'NOLOCATION';
        }
        console.log(Restaurants.length);
        return Restaurants;
    };

    RestaurantService.getRestaurantObject = function(id){
        return Restaurants[id];
    };
    return RestaurantService;

}]);