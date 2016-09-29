const expect = require('chai').expect;
const AddTwoNumbers = require('../addTwoNumbersTDD');

/*
 * DataStructure
 */
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

    it ('should throw if l1 and l2 aren\'t provided', function() {
      expect(() => new AddTwoNumbers(new ListNode(2))).to.throw(Error);
      expect(() => new AddTwoNumbers()).to.throw(Error);
    })
  })

  describe('#addTwoLists', function() {
    it ('should return the head of a listNode object with values 7->6', function() {
      let list1 = new ListNode(2);
      list1.next = new ListNode(4);

      let list2 = new ListNode(5);
      list2.next = new ListNode(2);

      let answer = new ListNode(7);
      answer.next = new ListNode(6);

      const addTwoNumbers = new AddTwoNumbers(list1, list2);

      expect(addTwoNumbers.addTwoLists()).to.deep.equal(answer);
    })

    it ('should handle 2 lists being different sizes, properly carrying the extra digit into the returned' +
      ' list', function() {
        let list1 = new ListNode(5);
        list1.next = new ListNode(4);
        list1.next.next = new ListNode(4);

        let list2 = new ListNode(5);
        list2.next = new ListNode(2);

        let answer = new ListNode(0);
        answer.next = new ListNode(7);
        answer.next.next = new ListNode(4);

        const addTwoNumbers = new AddTwoNumbers(list1, list2);

        expect(addTwoNumbers.addTwoLists()).to.deep.equal(answer);
      })


    it ('should return the head of a listNode object with values 0->7->1, properly carrying the extra' + 
      ' values', function() {
        let list1 = new ListNode(5);
        list1.next = new ListNode(4);

        let list2 = new ListNode(5);
        list2.next = new ListNode(2);

        let answer = new ListNode(0);
        answer.next = new ListNode(7);

        const addTwoNumbers = new AddTwoNumbers(list1, list2);

        expect(addTwoNumbers.addTwoLists()).to.deep.equal(answer);
      })

    it ('should properly carry the last remaining digit of 9+4 into a new node holding the value 1.' + 
      'resulting in the list 6->7->3->1', function() {
        let list1 = new ListNode(1);
        list1.next = new ListNode(4);
        list1.next.next = new ListNode(9);

        let list2 = new ListNode(5);
        list2.next = new ListNode(3);
        list2.next.next = new ListNode(4);

        let answer = new ListNode(6);
        answer.next = new ListNode(7);
        answer.next.next = new ListNode(3);
        answer.next.next.next = new ListNode(1);

        const addTwoNumbers = new AddTwoNumbers(list1, list2);

        expect(addTwoNumbers.addTwoLists()).to.deep.equal(answer);
      })
  })

})
