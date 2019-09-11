app.controller('payController',function ($scope,payService) {

    $scope.orderMap={'receiver':'','receiverMobile':'','receiverAreaName':''}

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

        cartService.getCart($scope.cartMap).success(
            function (response) {
                $scope.resultMap=response;
                console.log("res = "+$scope.resultMap);

            }
        );
    };

    $scope.submit=function () {
        $scope.orderMap.receiver=$scope.receiver;
        $scope.orderMap.receiverAreaName=$scope.receiverAreaName;
        $scope.orderMap.receiverMobile=$scope.receiverMobile;

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