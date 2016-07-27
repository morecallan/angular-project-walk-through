var app = angular.module("MovieApp", ["ngRoute"])

app.config(function($routeProvider) {
  $routeProvider
   .when('/login', {
     templateUrl: 'partials/loginRegister.html',
     controller: 'loginRegisterCtrl'
   })
   .when('/searchDatabase', {
     templateUrl: 'partials/searchDatabase.html',
     controller: 'searchDatabaseCtrl'
   })
});