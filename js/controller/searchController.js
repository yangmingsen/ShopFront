app.controller('searchController',function ($scope,$location, searchService) {
    $scope.searchMap={'keywords':''};//搜索对象

    //加载查询字符串
    $scope.loadkeywords=function(){
        $scope.searchMap.keywords=  $location.search()['keywords'];
        $scope.search();
    }

    $scope.currentPage=0;//设置当前页是 0
    $scope.listsPerPage = 12;//设置每页显示12个


    $scope.data = {
        "fs": [{
            p1:1,
            p2:2,
            p3:3,
            p4:4,
            p5:5,
            p13:0}]};


    //上一页
    $scope.prevPage = function() {
        console.log("当前页："+$scope.currentPage);
        if ($scope.data.fs[0].p1>1) {
            $scope.currentPage--;
            $scope.data = {
                "fs": [{
                    p1:$scope.data.fs[0].p1-1,
                    p2:$scope.data.fs[0].p2-1,
                    p3:$scope.data.fs[0].p3-1,
                    p4:$scope.data.fs[0].p4-1,
                    p5:$scope.data.fs[0].p5-1}]};
        }else if($scope.currentPage>1){
            $scope.currentPage--;
        }

    }
    //下一页
    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pages - 1) {
            $scope.currentPage++;
            $scope.data = {
                "fs": [{
                    p1:$scope.currentPage+1,
                    p2:$scope.currentPage+2,
                    p3:$scope.currentPage+3,
                    p4:$scope.currentPage+4,
                    p5:$scope.currentPage+5}]};
            console.log("currentPage:" + $scope.currentPage);
        }
    }
    //跳页
    $scope.toPage=function(page){
        $scope.currentPage=page-1;
        console.log("page:"+page);
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

        $scope.data.fs[0].p13=$scope.pages;

        console.log("dataNume:"+$scope.dataName);
        console.log("pages:"+$scope.pages);
        console.log("listPerpage"+$scope.listsPerPage);
        console.log("--------------------------------------------------");
    }


    $scope.loadkey = function () {
        $scope.searchMap.keywords = $scope.key;
        console.log("keyword = "+$scope.searchMap.keywords);
        $scope.search();
    }



});