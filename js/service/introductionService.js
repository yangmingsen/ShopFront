app.service("introductionService",function ($http) {
    this.search=function (searchMap) {
        return $http.post(url+'/ssm_shop/item/searchId.form',searchMap);
    };

    this.addCart=function (cartMap) {
        return $http.post(url+'/ssm_shop/cart/add.form',cartMap);
    };

});