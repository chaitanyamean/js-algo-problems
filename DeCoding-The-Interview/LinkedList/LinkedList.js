
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 0
    }

    /* Adding a value to the end */
    append(value){
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }

    /* Adding a value to the start of LL */
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode
        this.length++ 
    }
}

let ll = new LinkedList(10)
ll.append(5)
console.log(ll)
