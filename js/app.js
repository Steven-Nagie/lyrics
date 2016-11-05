angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
      url:'/',
      templateUrl: './home/home.html',
      controller: 'homeCtrl',
    }).state('game', {
      url: '/game',
      templateUrl: './game/game.html',
      controller: 'mainCtrl',
    }).state('end', {
      url: '/end/:id',
      templateUrl: './end/end.html',
      controller: 'endCtrl',
    });

  $urlRouterProvider
    .otherwise('/');
});
