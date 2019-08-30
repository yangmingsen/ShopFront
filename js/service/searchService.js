//搜索服务层
app.service("searchService",function($http){
    this.search=function(searchMap){
        return $http.post('http://192.168.21.32:8080/ssm_shop/searchName.form',searchMap);
    }
});
