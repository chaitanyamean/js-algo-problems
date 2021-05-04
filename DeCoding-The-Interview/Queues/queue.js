class Queue {
    constructor(){
        this.queue = []
    }
    get length() {
        return this.queue.length
    }
    enqueue(item) {
        this.queue.push(item)
    }
    dequeue() {
        return this.queue.shift()
    }
    peek() {
        return this.queue[0]
    }
    isEmpty() {
        return this.length === 0
    }
}

let queue = new Queue()
queue.enqueue('one')
queue.enqueue('two')
queue.enqueue('three')
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.isEmpty()