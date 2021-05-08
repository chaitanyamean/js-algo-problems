# Queues

Queues are very similar to Stacks

They use "first-in-first-out"


UseCases:
Similar to linked list and is used in ** Breadth first search ** and to implment cache

Downsides:
Adding and removing of the items are more difficult than stacks
because we are adding items from one side and removing items from other side

### Queue Methods
enqueue(): Add an item to the back of the queue - O(1)
dequeue(): Remove an item from the front of the queue - O(1)
peek(): Return the item at the front of the queue - O(1)
isEmpty(): Chech wheather the queue is empty, Return true if length is 0
get length(): Retur the lenght of the queue
look up - O(n)

### Coding a queue in JavaScript
1) Create Queue Class with one property: queue
2) The front of the queue is front the array and back(where we add elements) of the queue is the end of the array 

```javascript
class Queue {
    constructor(){
        this.queue = []
    }
}
```
### Get Length of the queue

```javascript
get length() {
    return this.queue.length
}
```
### Adding items to the Queue using push method

```javascript
enqueue(item) {
  this.queue.push(item)
}
```

### Remove an item from queue, should remove first item in array 

```javascript
dequeue() {
  return this.queue.shift()
}
```

### To Access the front item of the queue we take peek method

```javascript
peek() {
  return this.queue[0]
}
```

### isEmpty method to check is queue empty or not
```javascript
isEmpty() {
    return this.length  === 0
}
```

## Final Code

```javascript
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
```