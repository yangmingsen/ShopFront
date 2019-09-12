app.controller('orderController',function ($scope, serviceShareData, orderService) {

    $scope.infoMap={'username':''};
    $scope.cartMap={'username':''};

    $scope.load=function () {
        var user = serviceShareData.getData("username");
        console.log("user = "+user);
        if (user != null) {
            $scope.username=user;
        } else {
            $scope.username="";
            location.href="../home/login.html";
            return;
        }

        $scope.infoMap.username=user;
        $scope.cartMap.username=user;

        orderService.orderGet($scope.infoMap).success(
            function (response) {
                $scope.resultMap=response;
                console.log($scope.resultMap);
                console.log("len = "+$scope.resultMap.length);
            }
        );

        orderService.getCart($scope.cartMap).success(
            function (response) {
                $scope.resultCartMap=response;
                console.log($scope.resultCartMap);
                console.log("resultCartMaplen = "+$scope.resultCartMap.length);
            }
        );



    }
});