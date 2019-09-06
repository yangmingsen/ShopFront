var app = angular.module('shopFront',[]);

var url = "http://192.168.21.32:8080";

app.service('serviceShareData', function($window) {
    var addData = function (Key, Data)  {
        var data = $window.sessionStorage.getItem(Key);
        if (data != "") {
            clearDataByKey(Key);
        }
        $window.sessionStorage.setItem(Key,Data)
    };

    var getData = function (Key) {
        var data = $window.sessionStorage.getItem(Key);
        return data;
    };

    var clearAllData = function () {
        $window.sessionStorage.clear();
    };
    var clearDataByKey = function (Key) {
        $window.sessionStorage.removeItem(Key);
    };

    return {
        addData: addData,
        getData: getData,
        clearAll: clearAllData,
        clearByKey: clearDataByKey
    };
});