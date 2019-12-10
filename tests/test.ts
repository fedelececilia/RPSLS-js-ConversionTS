//import { getRandomChoice } from '../js/script';
import { expect } from 'chai';
import { assert } from 'chai';
import 'mocha';
 
describe('calculate', function() {
  it('add', function() {
    let result = 5 + 2;
    expect(result).equal(7);   
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


/*describe('randomChoice', function() {
  it('debería devolver un string', function() {
      assert(typeof(getRandomChoice()) == "string");
  })
})*/





/*var chai = require('chai');  
var assert = chai.assert;    // Using Assert style

describe('getRC', () => {
  it('should return', () => {
      assert.equal(1, 1);
  })
})*/