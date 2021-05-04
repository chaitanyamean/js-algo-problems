Stacks are 
"Last in First Out"

--> Stack allow O(1) for Add/Remove of the top item
--> Stacks doesn't offer constant time accessing the nth Element

# STACK Methods:
1) pop(): Remove the top item form the stack
2) push(item): Adds an item to the top of the stack
3) peek(): Returns the item at the top of the stack(but does not remove it)
4) isEmpty(): Returns true if the stack is empty
5) get length(): Returns the number of items in the stack 


### Building the stack:
1) Create class Stack
2) In constructor give one property: stack, will build this stack using an array
** 3) The top stack will be the end of the array and bottom of the stack will be the beginning of the array **

Structuring the stack in such a way that we can use 
```
array.push(), 
array.pop()
array.shift() - Removes the first ele in an array
array.unshift(1) - Adds the given ele in an array at [0] position of array 
```

```javascript
class Stack {
    constructor(){
        this.stack = []
    }
}
```

### Getter Function to get the length

```javascript
get length() {
    return this.stack.length
}
```

### push method to push an item to stack
```javascript
push(item) {
    return this.stack.push(item)
}
```

### pop method to remove the item from top of stack
```javascript
pop() {
    return this.stack.pop()
}
```

### peek method to get the top item in the stack
```javascript
peek() {
    return this.stack[this.length - 1]
}
```


### isEmpty method to check is stack empty or not
```javascript
isEmpty() {
    return this.length  === 0
}
```


# Final Code

```javascript
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
```

Real time use case for stacks

Build an Naavigation Component which shows all pages for example:
Home>Kitchen>Appliances>Toaster

A stack would be the optimal solution because the top mose item in the stack is the most recently added item.
So when we want to go back we can pop of the last item(in this case **Toaster**) and render the state of the previous page
