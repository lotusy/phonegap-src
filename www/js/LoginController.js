Foodster.controller('LoginController', ['$scope', '$rootScope', '$http', 'UserService', '$location', '$cordovaFacebook', function($scope, $rootScope, $http, UserService, $location, $cordovaFacebook) {
    $scope.facebookLogin = function(){
        $cordovaFacebook.login(["public_profile", "user_friends"])
            .then(function(success){
                console.log(success);
            })
    };
    var url = $location.url(),
        access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/),
        type = url.match(/\?(?:token_type)\=([\S\s]*?)\#/);
    $scope.response = '';
    var login = function(token, type){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', ApiUrl+'/token/auth/'+type, false);
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState == 4){
                console.log(xmlhttp.responseText);
                if (xmlhttp.status == 200 || xmlhttp.status == 0) {
                    $scope.response = xmlhttp.responseText;
                    console.log(xmlhttp.responseText);
                }

            }
        }
        xmlhttp.send();
    };
    if(access_token && type){
        access_token = access_token[1];
        type = type[1];
        console.log(access_token);
        console.log(type);
        login(access_token,type);
    }

}]);