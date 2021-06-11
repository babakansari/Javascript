// Reverse from a node to a node and returns the new from
export function Reverse(from, to){
    console.log(`Reverse from:${from.data} to:${to && to.data}`);
    let currentTo = to && to.next;
    // Reverse nodes from from.next to to.next
    let prev = null;
    let curr = from;
    while (curr != currentTo) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    from.next = curr;
    return prev;
}
