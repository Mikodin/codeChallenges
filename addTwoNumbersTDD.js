class AddTwoNumbers {
  constructor(list1, list2) {
    this.l1 = list1;
    this.l2 = list2;
    this._validateInput()
  }

  function addTwoLists() {
  }

  _validateInput() {
    if (this.l1 === undefined || this.l2 === undefined) {
      throw new Error('Both l1 and l2 must be defined');
    }
  }
}

module.exports = AddTwoNumbers;
