'use strict';

/* jasmine specs for controllers go here */

describe('meteoFrance App controllers', function(){

  beforeEach(module('meteoFranceApp.controllers'));
  beforeEach(module('meteoFranceApp.services'));
  beforeEach(module('iso-3166-country-codes'));

  describe('meteoFranceCtrl', function() {
    var $scope, ctrl, $httpBackend;

    beforeEach(module('meteoFranceApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://api.meteoFrancemap.org/data/2.5').
        respond([{forecast: {city: {name: 'Hamburg'} } }]);

      $scope = $rootScope.$new();
      ctrl = $controller('meteoFranceCtrl', { $scope: $scope });
    }));

//    it('should set the default value of iconBaseUrl', function() {
//      expect($scope.iconBaseUrl).toBe('http://openweathermap.org/img/w/');
//    });
  });
});
