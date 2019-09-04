app.controller('loginController',function ($scope,serviceShareData,loginService) {
    $scope.userMap={'password':'','username':''};

    $scope.login=function () {
        serviceShareData.clearAll();
        $scope.userMap.username=$scope.username;
        $scope.userMap.password=$scope.password;

        serviceShareData.addData("username",$scope.username);

        alert("login success");
        window.location.href="./home.html";

        loginService.login($scope.userMap).success(
            function (response) {
                if (response.success) {
                    alert("hello");
                    window.location.href="./home.html";
                } else {
                    alert(response.message);
                }
            }
        );
    }

});