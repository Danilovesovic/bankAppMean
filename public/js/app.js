angular.module('bankApp',['ngRoute','mainController'])
    .config(function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix("");
        $routeProvider
        .when('/',{
            templateUrl : 'pages/mainPage.html',
            controller : 'mainCtrl'
        })
    })