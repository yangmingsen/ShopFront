app.controller('introductionController',function ($scope, $location,serviceShareData,introductionService) {
    $scope.searchMap={'id':''};
    $scope.value=1;

    $scope.loadId=function () {
        $scope.searchMap.id=$location.search()['id'];
        console.log("id = "+$scope.searchMap.id);

        var user = serviceShareData.getData("username");
        if (user != null) {
            $scope.username=user;
        } else {
            $scope.username="";
        }

        $scope.search();
    }

    $scope.search=function () {
        introductionService.search($scope.searchMap).success(
            function (response) {
                $scope.resultMap=response;
                console.log("resultMap = "+$scope.resultMap);
                console.log("resultMap = "+$scope.resultMap.item.title);
        });
    };

    $scope.cartMap={'id':'','username':'','num':0};

    $scope.addCart=function () {

        var username = serviceShareData.getData("username");
        if (username == null) {
            location.href="./login.html";
            return ;
        }

        $scope.cartMap.id=$scope.searchMap.id;
        $scope.cartMap.username=username;
        $scope.cartMap.num=$scope.value;

        console.log("$scope.cartMap.id="+$scope.cartMap.id);
        console.log("$scope.cartMap.username="+$scope.cartMap.username);
        console.log("$scope.cartMap.num="+$scope.cartMap.num);

        introductionService.addCart($scope.cartMap).success(
            function (response) {
                if (response.success) {
                    console.log("success");
                    location.href="./shopcart.html";
                } else {
                    alert(response.message);
                }
            }
        );

    };

    $scope.addValue = function () {
        $scope.value=$scope.value+1;
        console.log("num = "+$scope.value);
    };

    $scope.reduceValue = function () {
        var num = $scope.value;
        if (num > 1) {
            $scope.value=num-1;
        }
        console.log("num = "+$scope.value);
    }

});