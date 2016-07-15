// http://chaijs.com/guide/styles/
// https://mochajs.org/#getting-started
// https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
var expect = require('chai').expect;
const circle = require('./circle.js');
describe('Circle', function() {
  var radius = 4;
  var area = circle.area(radius);
  var circumference = circle.circumference(radius);
  describe('Area', function() {
    it('should return the area of a circle', function() {
      expect(area).to.equal(50.26548245743669);
    });
  });
  describe('Circumference', function() {
    it('should return the circumference of a circle', function() {
      expect(circumference).to.equal(25.132741228718345);
    });
  });
});
