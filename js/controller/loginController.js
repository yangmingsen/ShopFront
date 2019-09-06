app.controller('loginController',function ($scope,serviceShareData,loginService) {
    $scope.userMap={'password':'','username':''};

    $scope.login=function () {
        serviceShareData.clearAll();
        $scope.userMap.username=$scope.username;
        $scope.userMap.password=$scope.password;

        loginService.login($scope.userMap).success(
            function (response) {
                if (response.success) {
                    serviceShareData.addData("username",$scope.username);
                    window.location.href="./home.html";
                } else {
                    alert(response.message);
                }
            }
        );
    }

});