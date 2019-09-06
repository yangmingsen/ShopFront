app.controller('registerController',function ($scope,registerService) {
    $scope.userMap={'password':'','username':''};

    $scope.add=function () {
        $scope.userMap.username=$scope.username;
        $scope.userMap.password=$scope.password;

        console.log("username = "+$scope.userMap.username);
        console.log("password = "+$scope.userMap.password);
        registerService.add($scope.userMap).success(
            function (response) {
                $scope.resutMap=response;
                if (response.success) {
                    location.href="./login.html"
                } else {
                    alert(response.message);
                }
            }
        );

    }
});