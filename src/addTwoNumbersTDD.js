/*
* Add Two Numbers
* LeetCode Challenge - https://leetcode.com/problems/add-two-numbers/
*/

/**
* Definition for singly-linked list.
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}

class AddTwoNumbers {
  constructor(list1, list2) {
    this.l1 = list1;
    this.l2 = list2;
    this._validateInput();
  }

  addTwoLists() {
    let head = new ListNode(0);
    let tail = head;
    let l1Tail = this.l1;
    let l2Tail = this.l2; 
    let carry = 0;

    while (l1Tail !== null || l2Tail !== null) {
      let x = (l1Tail !== null) ? l1Tail.val : 0;
      let y = (l2Tail !== null) ? l2Tail.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
      if (l1Tail !== null) l1Tail = l1Tail.next;
      if (l2Tail !== null) l2Tail = l2Tail.next;
    }

    if (carry > 0) {
      tail.next = new ListNode(carry);
    }

    return head.next;
  }

  _validateInput() {
    if (this.l1 === undefined || this.l2 === undefined) {
      throw new Error('Both l1 and l2 must be defined');
    }
  }
}

module.exports = AddTwoNumbers;
