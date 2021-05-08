class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0
    }

    isEmpty() {
        return this.length === 0;
    }

    push(value){
        const newNode = new Node(value)
        if(this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            // this.top
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++
    }
    pop() {
        if(this.isEmpty()) {
            return null
        }

        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer 

    }

    peek() {
        return this.top;
    }
}

let stack = new Stack()
stack.push('google')
stack.push('YT')
stack.push('Udemy')
stack.peek()
stack.pop()