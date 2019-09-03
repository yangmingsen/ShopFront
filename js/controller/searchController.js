app.controller('searchController',function ($scope,$location, searchService) {
    $scope.searchMap={'keywords':''};//搜索对象

    //加载查询字符串
    $scope.loadkeywords=function(){
        $scope.searchMap.keywords=  $location.search()['keywords'];
        $scope.search();
    }
    //搜索
    $scope.search=function(){

        searchService.search( $scope.searchMap ).success(
            function(response){
                $scope.resultMap=response;//搜索返回的结果
            }
        );
    }

    $scope.loadkey = function () {
        $scope.searchMap.keywords = $scope.key;
        $scope.search();
    }



});