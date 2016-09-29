class substringNoRepeatingCharacters {
  constructor(string) {
    this.str = string; 
    this._validateInput();
  }

  lengthOfLongestSubstring() {

  }

  _validateInput() {
    if (this.str === undefined || this.str === null) 
      throw new Error('The string must be defined');
    else 
      return true;
  } 
}

module.exports = substringNoRepeatingCharacters;
