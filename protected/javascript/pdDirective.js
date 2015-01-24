var pdApp = angular.module('pdApp');

pdApp.directive('navbar', [function(){
    return {
        templateUrl: '/partials/navbar.html'
    }
}]);
pdApp.directive('custinfo', [function(){
    return {
        templateUrl: '/partials/custinfo.html'
    }
}]);
pdApp.directive('tabs', [function(){
    return {
        templateUrl: '/partials/tabs.html'
    }
}]);