'use strict';

/* Directives */

angular.module('meteoFranceApp.directives', [])



   //to allow inserting script directive in view 
   .directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type === 'text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };
  })

   //
   // Create directive that handles formatting, resource fetching and
   // output of weather data for a specific date
   //
    .directive('weatherPanel',[function factory() {
      return {
        restrict: 'EA',

        scope: {
          useDayForecast: '=showEntry',
          forecast: '=weatherPanel'
        },

        templateUrl: 'partials/_weather-panel-light.html',

        link: function(scope, element, attrs) {
          // Get icon image url
          scope.getIconImageUrl = function(iconName) {
            return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
          };

          scope.parseDate = function (time) {
            return new Date(time * 1000);
          };
        }
      }
    }])
    //
    // Create directive that handles tweets,
    // output of tweets data for a specific city
    //
    .directive('tweetsPanel',[function factory() {
      return {
        restrict: 'EA',

        scope: {
          tweetsshow: '=showEntry',
          tweets: '=tweetsPanel'
        },

        templateUrl: 'partials/_tweets-panel-light.html',

        link: function(scope, element, attrs) {
          scope.parseDate = function (time) {
            return new Date(time * 1000);
          };
        }
      }
    }])

//
// "Wind" edition
//
.directive('weatherPanelWind',[function factory() {
  return {
    restrict: 'EA',

    scope: {
      useDayForecast: '=showEntry',
      forecast: '=weatherPanel'
    },

    templateUrl: 'partials/_weather-panel-wind.html',

    link: function(scope, element, attrs) {
      // Get icon image url
      scope.getIconImageUrl = function(iconName) {
        return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
      };

      scope.parseDate = function (time) {
        return new Date(time * 1000);
      };
    }
  }
}]);

