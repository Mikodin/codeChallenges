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

    for (var i = 0; i < strings.length; i++) {
      var char = strings[i][strings[i].search(regex)];
      var num = parseInt(strings[i].replace(regex,''));
      lettersArray.push(char);
      map.set(char, num);
    }

    lettersArray = lettersArray.sort();
    for (var j = 0; j < lettersArray.length; j++) {
      numbersArray.push(map.get(lettersArray[j]));
    }
    return numbersArray;
  }

  calculateExpression(numbers) {

  }

  _validateInput() {
    if (this.expression === undefined || this.expression === null) 
      throw new Error('An argument must be provided');
    else if (typeof(this.expression) !== 'string') 
      throw new Error('A string arugment must be provided');
  }
}

module.exports = DoMathFunsies;
