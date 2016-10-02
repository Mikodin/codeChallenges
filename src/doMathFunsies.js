class DoMathFunsies {
  constructor(string) {
    this.expression = string;
    this._validateInput();
  }

  sortExpression() {
    var strings = this.expression.split(' ');
    var lettersArray = [];
    var numbersArray = [];
    var map = new Map();
    var regex = /[a-z]/gi;

    /*
     * Needs to be worked on! Recursive solution may be only possibility
     */
    for (var i = 0; i < strings.length; i++) {
      var char = strings[i][strings[i].search(regex)];
      var num = parseInt(strings[i].replace(regex,''));
      if (map.get(char)) { 
        lettersArray.push(char+char);
        map.set(char+char,num);
      }
      else { 
        lettersArray.push(char);
        map.set(char, num);
      }
    }
    console.log(map);

    lettersArray = lettersArray.sort();
    console.log(lettersArray);
    for (var j = 0; j < lettersArray.length; j++) {
      numbersArray.push(map.get(lettersArray[j]));
    }
    return numbersArray;
  }

  calculateExpression(numbers) {
    // 89 + 900 - 123 * 369 / 246
    var total =  numbers[0];
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i + 1] !== undefined) {
        total += numbers[i + 1];
      } else {
        return Math.round(total);
      }
      if (numbers[i + 2] !== undefined) {
        total -= numbers[i + 2];
      } else {
        return Math.round(total);
      }
      if (numbers[i + 3] !== undefined) {
        total *= numbers[i + 3];
      } else {
        return Math.round(total);
      }
      if (numbers[i + 4] !== undefined) {
        total /= numbers[i + 4];
      } else {
        return Math.round(total);
      }
      i += 4;
    }
    return Math.round(total);
  }

  _validateInput() {
    if (this.expression === undefined || this.expression === null) 
      throw new Error('An argument must be provided');
    else if (typeof(this.expression) !== 'string') 
      throw new Error('A string arugment must be provided');
  }
}

module.exports = DoMathFunsies;
