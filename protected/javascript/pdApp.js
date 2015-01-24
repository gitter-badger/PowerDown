var pdApp = angular.module('pdApp', [
    'ui.router',
    'ui.bootstrap'
]);

pdApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // set for HTML5 mode
    $locationProvider.html5Mode(true);

    // unmatched url redirect to /
    $urlRouterProvider.otherwise('/');

    // setup of states for routing
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'protected/partials/base.html',
            controller: 'pdCtrl'
        })
        .state('order', {
            url: '/order',
            templateUrl: 'protected/partials/order.demo.html',
            controller: 'pdCtrl'
        })
        .state('archive', {
            url: '/archive',
            templateUrl: 'protected/partials/archive.demo.html',
            controller: 'pdCtrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'protected/partials/admin.demo.html',
            controller: 'pdCtrl'
        })
});