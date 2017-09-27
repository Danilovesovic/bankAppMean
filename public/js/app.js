angular.module('bankApp',['ngRoute','mainController','addAccountController','editPageController'])
    .config(function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix("");
        $routeProvider
        .when('/',{
            templateUrl : 'pages/mainPage.html',
            controller : 'mainCtrl'
        })
        .when('/addAccount',{
        	templateUrl : "pages/addAccount.html",
        	controller : "addAccountCtrl"
        })
        .when('/editAccount',{
            templateUrl : "pages/editPage.html",
            controller : 'editPageCtrl'
        })
    })