app.service('payService',function ($http) {
    this.submit=function (order) {
        return $http.post('####',order)
    }
});