app.controller('homeController',function ($scope, homeService) {

    var url ="";

    //搜索跳转
    $scope.search=function(){
        location.href="./search.html#?keywords="+$scope.keywords;
    }
});