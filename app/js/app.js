'use strict';

// Declare app level module which depends on filters, and services
angular.module('meteoFranceApp', [
  'ngRoute',
  'meteoFranceApp.filters',
  'meteoFranceApp.services',
  'meteoFranceApp.directives',
  'meteoFranceApp.controllers',
  "iso-3166-country-codes",
  

])
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weather', {templateUrl: 'partials/weather.html', controller: 'meteoFranceCtrl'});
  $routeProvider.otherwise({redirectTo: '/weather'});
}]);


