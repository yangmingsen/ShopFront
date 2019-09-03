app.service('registerService',function ($http) {
    this.add=function (userMap) {
        return $http.post(url+"/ssm_shop/user/add.form",userMap);
    }
});