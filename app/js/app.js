'use strict';

// Declare app level module which depends on filters, and services
angular.module('openWeatherApp', [
  'ngRoute',
  'openWeatherApp.filters',
  'openWeatherApp.services',
  'openWeatherApp.directives',
  'openWeatherApp.controllers',
  "iso-3166-country-codes",
  

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weather', {templateUrl: 'partials/weather.html', controller: 'OpenWeatherCtrl'});
  $routeProvider.otherwise({redirectTo: '/weather'});
}]);


