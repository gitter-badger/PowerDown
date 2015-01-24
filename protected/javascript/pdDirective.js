var pdApp = angular.module('pdApp');

pdApp.directive('navbar', [function(){
    return {
        templateUrl: 'protected/partials/navbar.html'
    }
}]);