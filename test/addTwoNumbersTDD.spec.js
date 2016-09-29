const expect = require('chai').expect;
const AddTwoNumbers = require('../addTwoNumbersTDD');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

describe('AddTwoNumbers', function() {
  describe('::constructor', function() {
    it ('should have 2 list objects', function() {
      const list1 = new ListNode(2);
      const list2 = new ListNode(5);
      const addTwoNumbers = new AddTwoNumbers(list1, list2);
      expect(addTwoNumbers.l1).to.equal(list1);
      expect(addTwoNumbers.l2).to.equal(list2);
    })
  })
})
