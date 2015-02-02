var pdApp = angular.module('pdApp');

pdApp.service('productList', ['$http', function($http){
    this.getallproducts = function(){
        var promise = $http.get('/api/product').then(function(response){
            return response.data
        });
        return promise
    };
    this.getmotors = function(){
        var promise = $http.get('/api/product',{ params: {type: 'Motors'}}).then(function(response){
            return response.data
        });
        return promise
    };
    this.getantisweat = function(){
        var promise = $http.get('/api/product',{ params: {type: 'Anti-Sweat'}}).then(function(response){
            return response.data
        });
        return promise
    };
    this.getcoolerled = function(){
        var promise = $http.get('/api/product',{ params: {type: 'Cooler LED'}}).then(function(response){
            return response.data
        });
        return promise
    };
    this.getledlights = function(){
        var promise = $http.get('/api/product',{ params: {type: 'LED Lights'}}).then(function(response){
            return response.data
        });
        return promise
    };
    this.newProduct = function(data){
        console.log('Posting new product data', data);
        $http.post('/api/product', data)
    }
}]);
pdApp.service('userFunctions', ['$http', function($http){
    this.getUsers = function(){
        console.log('Getting users from service');
        var promise = $http.get('/api/user').then(function(response){
            console.log(response);
            return response.data;
        });
        return promise;
    };
    this.resetUserPass = function(){
        console.log('Reset Password')
    }
}]);