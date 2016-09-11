angular.module('routingApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      templateUrl: 'home/home.html'
    })
    .state('signup', {
      url: '/signup',
      controller: 'signupCtrl',
      templateUrl: 'signup/signup.html'
    })
    .state('details', {
      url: '/details/:url',
      controller: 'detailsCtrl',
      templateUrl: 'details/details.html'
    });
    // Change details state so it takes in an ID
    // and will use a service to get the details for that one person
});
