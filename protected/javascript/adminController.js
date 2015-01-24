var pdApp = angular.module('pdApp');

pdApp.controller('adminCtrl', ['$scope', function($scope){
    console.log('invoke Admin Controller');
    $scope.isCollapsed = true
}]);