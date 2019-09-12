app.controller('payController',function ($scope,payService,serviceShareData) {

    $scope.orderMap={'username':'','receiverMobile':'','receiverAreaName':''};
    $scope.cartMap={'username':''};

    $scope.load=function () {
        var user = serviceShareData.getData("username");
        if (user != null) {
            $scope.username=user;
        } else {
            $scope.username="";
            location.href="./login.html";
            return;
        }
        console.log("usr = "+user);

        $scope.cartMap.username=user;

        console.log("$scope.cartMap.username = "+$scope.cartMap.username);

        payService.getCart($scope.cartMap).success(
            function (response) {
                $scope.resultMap=response;
                $scope.total=0;
                for (let i = 0; i < $scope.resultMap.length; i++) {
                    $scope.total+=$scope.resultMap[i].price;
                }
            }
        );
    };

    $scope.submit=function () {
        $scope.orderMap.username=$scope.username;
        $scope.orderMap.receiverAreaName="广东省 中山市 火炬开发区 德创智谷22号";
        $scope.orderMap.receiverMobile="15274437065";

        payService.submit($scope.orderMap).success(
            function (response) {
                if(response.success) {
                    location.href="./success.html";
                } else {
                    alert(response.message);
                }
            }
        );
    }
});