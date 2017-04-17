var myapp;
(function (myapp) {
    var app = angular.module('myapp', ['ui.router', 'ngResource', "ngAnimate"]);
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: myapp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: myapp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('portfolio', {
            url: '/portfolio',
            templateUrl: '/ngApp/views/portfolio.html',
            controller: myapp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('contact', {
            url: '/contact',
            templateUrl: '/ngApp/views/contact.html',
            controller: myapp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(myapp || (myapp = {}));
