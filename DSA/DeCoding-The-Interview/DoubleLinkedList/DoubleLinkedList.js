class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1
    }

    /* Adding a value to the end */
    append(value){
        let newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this;
        // console.log(this.tail)
    }

    /* Adding a value to the start of LL */
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++ 
        // console.log('tail', this.tail == this.tail)
    }

    printLL(){
      let arr = []
      let currentNode = this.head
      while(currentNode !== null) {
        arr.push(currentNode.value)
        currentNode = currentNode.next
      }
      // console.log(arr)
      return arr
    }

    insert(idx, value) {
      if(idx === 0) {
        this.prepend(value)
      } else if (idx >= this.length) {
        this.append(value)
      } else {
        let newNode = new Node(value)
        let leader = this.traverseNode(idx-1);
        let follower = leader.next;
        newNode.prev = leader
        newNode.next = follower
        leader.next = newNode
        follower.prev = newNode
        console.log(this)
        this.length++
      }
    }

    remove(idx) {
      console.log(this.length)
      let leader;
      if(idx === 0) {
        let newNode = this.head;
        this.head = newNode.next;
      this.length--;
      return

      } else if(idx < 0 || idx >= this.length) {
        return null;
      } else if(idx === this.length - 1) {
        console.log('here')
       leader = this.traverseNode(idx-1)        
      leader.next = null;
      this.length--;
      }
      
      else {
       leader = this.traverseNode(idx-1)        
      let unwantedNode = leader.next
      let nextNode = unwantedNode.next
      nextNode.prev = unwantedNode.prev
      leader.next = unwantedNode.next
      this.length--;
      }

    }

    traverseNode(idx) {
      let count = 0;
      let currentNode = this.head;
      while(count !== idx) {
        currentNode = currentNode.next;
        count++
      }
      return currentNode

    }
}

let ll = new DoublyLinkedList(10)
ll.append(45)
ll.append(77)
ll.prepend(1)
ll.insert(1, 44)
ll.remove(0)
ll.printLL()
// ll.printLL()
