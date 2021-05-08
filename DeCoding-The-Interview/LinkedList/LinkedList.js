
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

    isEmpty() {
       return this.length === 0
    }

    printLinkedListValues() {
        let arr = []
      let currentNode = this.head
      while(currentNode !== null) {
        arr.push(currentNode.value)
        currentNode = currentNode.next
      }
      console.log(arr)
      return arr
    }

    /* Adding a value to the end */
    append(value){
        let newNode = new Node(value);
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
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

    remove(idx) {
        if(idx == 0) {
            let newNode = this.head;
            this.head = newNode.next;
            this.length--;
            return this.printLinkedListValues()
        } else if(idx < 0 || idx > this.length) {
            return null;
        } else {
            let leader = this.traverseNode(idx-1);
            let unWantedNode = leader.next;
            leader.next = unWantedNode.next;
            this.length--;
        }
    }

    reverse() {
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first
    }

    get(index) {
        if (index < 0 || index > this.length || this.isEmpty()) {
        return null;
        }
        /* We want the first node */
        if (index === 0) {
        return this.head;
        }
        /* We want the last node */
        if (index === this.length - 1) {
        return this.tail;
        }
        }
}

let ll = new LinkedList(10)
ll.append(5)
console.log(ll)
