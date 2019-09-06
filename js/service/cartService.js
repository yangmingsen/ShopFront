app.service('cartService',function ($http) {
    this.getCart=function (cartMap) {
        return $http.post(url+'/ssm_shop/cart/get.form',cartMap);
    }
});