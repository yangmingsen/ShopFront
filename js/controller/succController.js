app.controller('succControler',function ($scope, serviceShareData) {
    $scope.load=function () {
        var user = serviceShareData.getData("username");
        if (user != null) {
            $scope.username = user;
        } else {
            $scope.username = "";
            location.href = "./login.html";
            return;
        }
    }
});