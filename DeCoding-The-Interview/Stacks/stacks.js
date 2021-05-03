class Stack {
    constructor() {
        this.stack = []
    }
    get length() {
        return this.stack.length
    }
    push(item) {
        return this.stack.push(item)
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.length - 1]
    }
    isEmpty() {
        return this.length === 0
    }
}


let navOptions = new Stack()
navOptions.push('Home')
navOptions.push('Kitchen')
navOptions.push('Appliances')
navOptions.pop()
navOptions.pop()
navOptions.peek()
navOptions.isEmpty()