export class ListNode {
    constructor(x) {
      this.data = x;
      this.next = null;
    }

  }

export function createLinkedList(arr) {
    var head = null;
    var tempHead = head;
    for (var v of arr) {
        if (head == null) {
            head = new ListNode(v);
            tempHead = head;
        } else {
            head.next = new ListNode(v);
            head = head.next;
        }
    }
    return tempHead;
}

export function printLinkedList(head) {
    var out = '[ ';
    while (head != null) {
        out += head.data;
        head = head.next;
        if (head != null) {
            out += ' -> ';
        }
    }
    out += ' ]';
    return out;
}