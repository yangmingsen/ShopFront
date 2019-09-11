app.controller('orderController',function ($scope, serviceShareData, orderService) {

    $scope.infoMap={'username':''}

    $scope.load=function () {
        var user = serviceShareData.getData("username");
        if (user != null) {
            $scope.username=user;
        } else {
            $scope.username="";
            location.href="./login.html";
            return;
        }

        $scope.infoMap.username=user;

        orderService.orderGet($scope.infoMap).success(
            function (response) {
                $scope.resultMap=response;
                console.log(response);

            }
        );

    }
});