app.service('payService',function ($http) {
    this.submit=function (order) {
        return $http.post(url+'/ssm_shop/cart/pay.form',order)
    }

    this.getCart=function (cartMap) {
        return $http.post(url+'/ssm_shop/cart/get.form',cartMap);
    }
});