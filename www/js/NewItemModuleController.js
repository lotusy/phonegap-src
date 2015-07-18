Foodster.controller('NewItemModuleController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
    $scope.nearbyRestaurants = [
        {distance: 1,name:"Sushi Garden",type:"Japanese"},
        {distance: 2,name:"Milestones",type:"American"},
        {distance: 3,name:"Earls",type:"American"},
        {distance: 4,name:"Hon's Wonton House",type:"Chinese"},
        {distance: 5,name:"Samurai Sushi",type:"Japanese"},
        {distance: 6,name:"Kamamarui",type:"Japanese"},
        {distance: 7,name:"Ramen Jinya",type:"Japanese"}
    ]
}]);
