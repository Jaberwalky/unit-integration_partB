var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add', function() {
    calculator.add(12)
    assert.equal(12, calculator.runningTotal);
  });

  it('should be able to subtract', function() {
    calculator.subtract(9)
    assert.equal(-9, calculator.runningTotal);
  });

  it('should be able to multiply', function() {
    calculator.multiply(5)
    assert.equal(0, calculator.runningTotal);
  });

  it('should be able to divide', function() {
    calculator.divide(8)
    assert.equal(0, calculator.runningTotal);
  });

  it('should be able to handle multiple operations', function() {
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(15, calculator.runningTotal);
  });

  it('should be able to clear', function() {
    calculator.add(5)
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal);
  });

});
