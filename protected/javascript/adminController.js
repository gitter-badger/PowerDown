var pdApp = angular.module('pdApp');

pdApp.controller('adminCtrl', ['$scope', 'userFunctions', 'productList', function($scope, userFunctions, productList){
    console.log('invoke Admin Controller');
    $scope.newprod = {
        _id: "",
        productname: "",
        productprice: "",
        productco: "",
        producttype: "",
        productestar: false
    };
    $scope.submitNewProduct = function(){
        console.log('Checking product', $scope.newprod);
        productList.newProduct($scope.newprod)
    };
    userFunctions.getUsers().then(function(d){
        console.log('Getting Users');
        $scope.salesreps = d;
    });
    $scope.resetPassword = function(email, password){
        userFunctions.resetUserPass(email, password).then(function(){
            $state.reload()
        })
    }
}]);