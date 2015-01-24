var pdApp = angular.module('pdApp', [
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.tpls'
]);

pdApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // set for HTML5 mode
    //$locationProvider.html5Mode(true);

    // unmatched url redirect to /
    $urlRouterProvider.otherwise('/');

    // setup of states for routing
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/partials/base.html',
            controller: 'pdCtrl'
        })
        .state('order', {
            url: '/order',
            templateUrl: '/partials/order.html',
            controller: 'pdCtrl'
        })
        .state('archive', {
            url: '/archive',
            templateUrl: '/partials/archive.html',
            controller: 'pdCtrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: '/partials/admin.html',
            controller: 'adminCtrl'
        })
        .state('products', {
            url: '/products',
            templateUrl: '/partials/admin/products.html',
            controller: 'adminCtrl'
        })
        .state('pricing', {
            url: '/pricing',
            templateUrl: '/partials/admin/pricing.html',
            controller: 'adminCtrl'
        })
        .state('quotes', {
            url: '/quotes',
            templateUrl: '/partials/admin/quotes.html',
            controller: 'adminCtrl'
        })
        .state('salesrep', {
            url: '/salesrep',
            templateUrl: '/partials/admin/salesrep.html',
            controller: 'adminCtrl'
        })
        .state('rebate', {
            url: '/rebate',
            templateUrl: '/partials/admin/rebate.html',
            controller: 'adminCtrl'
        })
        .state('powerco', {
            url: '/powerco',
            templateUrl: '/partials/admin/powerco.html',
            controller: 'adminCtrl'
        })
        .state('test', {
            url: '/test',
            templateUrl: '/partials/base2.html',
            controller: 'pdCtrl'
        })
});