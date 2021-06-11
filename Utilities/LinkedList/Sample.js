import { ListNode, createLinkedList, printLinkedList } from './ListNode.js';
import { Reverse } from './Reverse.js';

let head = createLinkedList([1, 2, 8, 4, 6, 9, 12, 16]);
let from = head;
let to = from.next.next.next.next;

console.log( printLinkedList(head) );
from.next = Reverse(from.next, to);
console.log( printLinkedList(head) );

console.log('\r\n----------\r\n');

head = createLinkedList([1, 2, 3]);
from = head;
to = null;

console.log( printLinkedList(from) );
from = Reverse(from, to);
console.log( printLinkedList(from) );