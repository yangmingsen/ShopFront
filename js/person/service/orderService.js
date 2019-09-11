app.service('orderService',function ($http) {
    this.orderGet=function (infoMap) {
        return $http.post('###',infoMap);
    }
});