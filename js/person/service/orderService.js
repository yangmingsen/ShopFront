app.service('orderService',function ($http) {
    this.orderGet=function (infoMap) {
        return $http.post(url+'/ssm_shop/order/get.form',infoMap);
    };

    this.getCart=function (cartMap) {
        return $http.post(url+'/ssm_shop/cart/get.form',cartMap);
    }
});