
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

    insert(idx, value) {
        /* Adding a value to the start of LL */
        if(idx === 0) {
            this.prepend(value)
            this.length++;
        } 
        /* Adding a value to the end of LL */
        else if(idx >= this.length) {
            this.append(value);
            this.length++;            
        } 
        
        else {
            let newNode = new Node(value);
            let leader = this.traverseNode(idx-1);
            let holdingPointer = leader.next;
            newNode.next = holdingPointer;
            leader.next = newNode;
            this.length++

        }
    }

    traverseNode(idx) {
        let count = 0
        let currentNode = this.head
        while (count !== idx) {
            currentNode = currentNode.next;
            count++
        }
        return currentNode
    }
}

let ll = new LinkedList(10)
ll.append(5)
console.log(ll)
