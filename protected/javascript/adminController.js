var pdApp = angular.module('pdApp');

pdApp.controller('adminCtrl', ['$scope', 'userFunctions', function($scope, userFunctions){
    console.log('invoke Admin Controller');
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