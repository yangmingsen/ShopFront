app.controller('cartController',function ($scope,serviceShareData, cartService) {

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

        cartService.getCart($scope.cartMap).success(
            function (response) {
                $scope.resultMap=response;
                console.log("res = "+$scope.resultMap);
                for (var i=0; i<$scope.resultMap.length; i++) {
                    console.log($scope.resultMap[i].title);
                    console.log($scope.resultMap[i].price);
                    console.log($scope.resultMap[i].num);
                }
            }
        );

    }




});