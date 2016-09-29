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

  describe('#lengthOfLongestSubstring', function() {
    it ('should return the length the length of the longest substring with no repeating characters', function() {
      let ssnr = new SSNR('bbbbbb');
      expect(ssnr.lengthOfLongestSubstring()).to.equal(1);
    })

  })
})
