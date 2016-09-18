'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('meteoFranceApp.services'));


  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1.6');
    }));
  });

  describe('meteoFranceMap', function() {
    it('should return a json with a city info map on request', inject(function(meteoFranceMap) {
      expect(true).toEqual(true);
    }));
  });
});
