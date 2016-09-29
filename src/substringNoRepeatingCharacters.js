class substringNoRepeatingCharacters {
  constructor(string) {
    this.str = string; 
    this._validateInput();
  }

  lengthOfLongestSubstring() {
    var strMap = {};
    var str = this.str;
    var subStr = '';

    for (var i = 0; i < str.length; i++) {
      subStr += str[i];
      for (var j = i+1; j < str.length; j++) {
        if (!_inSubString(subStr, str[j])) {
          subStr += str[j];
        } else {
          strMap[subStr] = subStr.length;
        }

      }
    }

    for (var key in strMap) {
      console.log(strMap[key]);
    }
    console.log(subStr);
    return subStr.length;
  }

  _inSubString(str, c) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === c) {
        return true;
      } else {
        return false;
      }
    }
  }

  _validateInput() {
    if (this.str === undefined || this.str === null) 
      throw new Error('The string must be defined');
    else 
      return true;
  } 
}

module.exports = substringNoRepeatingCharacters;
