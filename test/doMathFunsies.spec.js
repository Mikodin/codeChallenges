const expect = require('chai').expect;
const DoMathFunsies = DMF = require('../src/doMathFunsies');

describe('DoMathFunsies', function() {
  describe('::constructor', function() {
    it ('should have a string named "expression" set to the string passed in', function() {
      let str = 'The String Passed in!';
      let doMath = new DMF(str);
      expect(doMath.expression).to.equal(str);
    });

    it ('should throw an error if no arg is passed', function() {
      expect(() => new DMF()).to.throw(Error);
    });
    it ('should throw an error if non string arg is passed', function() {
      expect(() => new DMF()).to.throw(Error);
    });
  })


  describe('#sortExpression', function() {
    it ('Should return the numbers according to the alphabetic value of the letter', function() {
      let str = '24z6 1x23 y369 89a 900b';
      let answer = [89, 900, 123, 369, 246];
      let doMath = new DMF(str);

      expect(doMath.sortExpression()).to.deep.equal(answer);
    })
  })

  describe('#calculateExpression', function() {
    it ('Should return the calculate math funsies by applying operator + - * / in that order to the array', function() {

      let str = '24z6 1x23 y369 89a 900b';
      let doMath = new DMF(str);
      let numbers = doMath.sortExpression();
      let answer = 1299;

      expect(doMath.calculateExpression(numbers)).to.equal(answer);
    })
  })

})
