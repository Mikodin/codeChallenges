const expect = require('chai').expect;
const SubStringNoRepeatingChar = SSNR = require('../src/substringNoRepeatingCharacters');

describe('SubStringNoRepeatingCharacter', function() {
  describe('::constructor', function() {
    it ('should have a variable str that is defined by the string passed in', function() {
      let ssnr = new SSNR('Some String');
      expect(ssnr.str).to.equal('Some String');
    })

    it ('should throw an error if arguments aren\'t provided', function() {
      expect(() => new SSNR()).to.throw(Error);
    })
  })
})
