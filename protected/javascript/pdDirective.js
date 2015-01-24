var pdApp = angular.module('pdApp');

pdApp.directive('pdnavbar', [function(){
    return {
        templateUrl: '/partials/navbar.html'
    }
}]);
pdApp.directive('pdcustinfo', [function(){
    return {
        templateUrl: '/partials/custinfo.html'
    }
}]);
pdApp.directive('pdtabs', [function(){
    return {
        templateUrl: '/partials/tabs.html'
    }
}]);