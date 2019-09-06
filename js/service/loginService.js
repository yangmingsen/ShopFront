app.service('loginService',function ($http) {
    this.login=function (userMap) {
        return $http.post(url+"/ssm_shop/user/login.form",userMap);
    }
});