app.controller('introductionController',function ($scope, $location,introductionService) {
    $scope.searchMap={'id':''};

    $scope.loadId=function () {
        $scope.searchMap.id=$location.search()['id'];
        console.log("id = "+$scope.searchMap.id);
        $scope.search();
    }

    $scope.search=function () {
        introductionService.search($scope.searchMap).success(
            function (response) {
                $scope.resultMap=response;
                console.log("resultMap = "+$scope.resultMap);
                console.log("resultMap = "+$scope.resultMap.item.title);
        });
    }
});