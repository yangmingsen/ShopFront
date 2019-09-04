app.controller('homeController',function ($scope,serviceShareData, homeService) {

    //搜索跳转
    $scope.search=function(){
        location.href="./search.html#?keywords="+$scope.keywords;
    }

    $scope.load=function () {
        $scope.username = serviceShareData.getData("username");
    }
});