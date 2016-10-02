class DoMathFunsies {
  constructor(string) {
    this.expression = string;
    this._validateInput();
  }

  sortExpression() {
  }

  _validateInput() {
    if (this.expression === undefined || this.expression === null) 
      throw new Error('An argument must be provided');
    else if (typeof(this.expression) !== 'string') 
      throw new Error('A string arugment must be provided');
  }
}

module.exports = DoMathFunsies;
