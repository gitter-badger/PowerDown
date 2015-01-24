var pdApp = angular.module('pdApp');

pdApp.controller('pdCtrl', ['$scope', function($scope){
    console.log('invoke primary controller');
    $scope.data = {
        test: 'test'
    }
}]);