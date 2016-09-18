'use strict';

/* Controllers */

angular.module('meteoFranceApp.controllers', [])

  // Controller for "open weather map" api data search
  .controller('meteoFranceCtrl',
    ['$scope','$http','meteoFranceMap','exampleLocations','ISO3166',
      function($scope,$http,meteoFranceMap,exampleLocations,ISO3166) {


   
    $scope.message = '';
    $scope.hasState = '';

    // Expose example locations to $scope
    $scope.exampleLocations = exampleLocations;
    
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    //get current user location (city)
    $http.get('http://ip-api.com/json').
        then(function(response) {
            console.log(response.data.city);
            // On initialization load data for current visitor's location
            $scope.forecast = meteoFranceMap.queryForecastDaily({
              location: response.data.city
            });

        });

    //get tweets for hashtag meteo in user location (city)

    var req = {headers: {origin:'http://meteofrance.site88.net','Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8','authorization':'Basic TExNU3FldUtHcW92VUhubjdySjdSbnB6WDpDUUhZVmV6NDI2SHpNallDYlQwMkVmM05DNUR3V1djWVJuckt3aG5BMzdzblh1eW9Iag=='},body: { 'grant_type': 'client_credentials' }};
    $http.defaults.useXDomain = true;
    $http.post('https://api.twitter.com/oauth2/token',req).then(function(response) {
            console.log(response);
            // On initialization load data for current visitor's location

        });

    // Get forecast data for location as given in $scope.location
    $scope.getForecastByLocation = function() {
        console.log('------');
        console.log($scope.location);
        console.log($('#location').val());
      if ($('#location').val() == '') {
        $scope.hasState = 'has-warning';
        $scope.message = "Entrez une ville";
        return;
      }

      if ($scope.location != '' && $scope.location != undefined) {
          $scope.hasState = 'has-success';

          $scope.forecast = meteoFranceMap.queryForecastDaily({
            location: $scope.location
          });
          $scope.location='';
          return;
      }

      $scope.hasState = 'has-success';

      $scope.forecast = meteoFranceMap.queryForecastDaily({
        location: $('#location').val()
      });
    };

    // Set $scope.location and execute search on API
    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };
    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };
    
  }])
