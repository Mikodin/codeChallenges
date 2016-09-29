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
    let head = new ListNode(undefined);
    let answer = new ListNode(undefined);
    head.next = answer;

    head.val = this.l1.val + this.l2.val;
    this.l1 = this.l1.next;
    this.l2 = this.l2.next;

    while (this.l1.next !== null || this.l2.next !== null) {
      answer.val = this.l1.val + this.l2.val;
      this.l1 = this.l1.next;
      this.l2 = this.l2.next;
      answer.next = new ListNode(undefined);
    }
    answer.val = this.l1.val + this.l2.val;
    console.log(head);
    return head;
  }

  _validateInput() {
    if (this.l1 === undefined || this.l2 === undefined) {
      throw new Error('Both l1 and l2 must be defined');
    }
  }
}

module.exports = AddTwoNumbers;
