app.controller('homeController',function ($scope,serviceShareData, homeService) {

    //搜索跳转
    $scope.search=function(){
        location.href="./search.html#?keywords="+$scope.keywords;
    }

    $scope.load=function () {
        var user = serviceShareData.getData("username");
        if (user != null) {
            $scope.username=user;
        } else {
            $scope.username="";
        }
        console.log("usr = "+user);
    }
});