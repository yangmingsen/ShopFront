app.controller('searchController',function ($scope,$location, searchService) {
    $scope.searchMap={'keywords':''};//搜索对象

    //加载查询字符串
    $scope.loadkeywords=function(){
        $scope.searchMap.keywords=  $location.search()['keywords'];
        $scope.search();
    }

    $scope.currentPage=0;//设置当前页是 0
    $scope.listsPerPage = 12;//设置每页显示12个

    //上一页
    $scope.prevPage = function() {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    }
    //下一页
    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pages - 1) {
            $scope.currentPage++;
        }
       console.log("currentPage:"+$scope.currentPage);
    }

    //跳页
    $scope.toPage=function(page){
        console.log("page:"+page);
        $scope.currentPage=page;
    }

    //监听翻页
    $scope.$watch('currentPage', function() {
        console.log("watch");
       selectPage();
    });

    //搜索
    $scope.search=function(){

        searchService.search( $scope.searchMap ).success(
            function(response){
                $scope.resultMap=response;//搜索返回的结果
                selectPage();
            }
        );

    }

    function selectPage(){
        let out = [];
        angular.forEach($scope.resultMap.items,function (v) {
            out.push(v);
        });

        $scope.resultMap2 =out.slice($scope.currentPage * $scope.listsPerPage,$scope.currentPage * $scope.listsPerPage+$scope.listsPerPage);
        $scope.dataName=out.length;
        $scope.pages=Math.ceil($scope.dataName/$scope.listsPerPage);

        console.log("dataNume:"+$scope.dataName);
        console.log("pages:"+$scope.pages);
        console.log("listPerpage"+$scope.listsPerPage);
        console.log("--------------------------------------------------");
    }


    $scope.loadkey = function () {
        $scope.searchMap.keywords = $scope.key;
<<<<<<< HEAD
        console.log("keyword = "+$scope.searchMap.keywords);

=======
>>>>>>> origin/master
        $scope.search();
    }



});