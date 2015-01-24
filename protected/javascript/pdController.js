var pdApp = angular.module('pdApp');

pdApp.controller('pdCtrl', ['$scope', 'productList', function($scope, productList){
    console.log('invoke primary controller');
    $scope.motors = productList.getmotors();
    $scope.antisweats = productList.getantisweat();
    $scope.coolerleds = productList.getcoolerled();
    $scope.ledlights = productList.getledlights();
}]);