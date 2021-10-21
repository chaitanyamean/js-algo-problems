# Linked List


### It is a series of linked nodes where each node points to next node in the list. 
### Each node has a 
***1) Value*** 
***2) Pointer***

<!-- https://dynalist.io/d/5SccLds9RQxoDmuzkuCRE2ki -->

 Linked list use the ***last-in-first-out***

 To search a node in linked list we need to iterate every node in the linked list starting from Head LL
 So it run O(n)

 ### Linked List Methods

 append(Node)/append: Add an element to the linked list - O(1)
 remove(index): Delete an item from a given index - O(n)
 get(index): Return an element from a given index - O(n)
 isEmpty(): Return a boolean indicating wheather the list is empty
 prepend(): Add an element to the start of linked list  - O(1)

 ### Single-Linked vs Doubly-Linked List
 In Single-linked list each node has one pointer which points to next node/element in the list
 In Doubly-linked list each node has 2 pointers 
  -- one pointer points to next node/element in the list
  -- second pointer points to previous node/element in the list

Doubly-linked list are great for removing the nodes because they have access to previous and next node
In Single-linked it is hard to remove nodes, because 
    -- We need to iterate through list
    -- And keep track of previous node


### Pros and cons
PROS:
Fast Insertion and Deletion
Ordered
Flexiable size

CONS:
Slow look up
More memory


https://visualgo.net/en/list

# Coding a linked list

Need to build Node Class first which take 2 properties: value and next

```javascript
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
```
Now we need to build Linked List Class.
Constructor will having 3 properties
    - head: head pointer that keep tracks of first node in the linked list 
    - tail: tail pointer that keep tracks of last node in the linked list
    -length: the number of nodes in the list

### The Head and Tail will be null untill we addour first node

```javascript
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
}
```

### isEmpty method to check is LL empty or not
```javascript
isEmpty() {
    return this.length  === 0
}
```

### Adding nodes to linked list

There are 2 scenarios to create a push method 
    - When the list is empty
    - When the list having nodes

### When list is empty
```javascript
append(value) {
    const newNode = new Node(value)
    if(this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode
    }
}
```

### When list has atleast one value

1) Set the current node pointer to the new node
2) Update tail to pointer to the new node and increment length

```javascript
append(value) {
    const newNode = new Node(value)
    if(this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++
}
```

### Removing node from LL

There are 2 scenarios to create a remove method 
    - When the list is empty
    - When there is only one node in the list
    - When there is more than one node in the list
    - When index is sent is 0

### When list is empty
```javascript
remove(index) {
    if(this.isEmpty()) {
        return null
    }
}
```

### When there is only one node in the list

Need to reset Head and Tail pointers to Null

```javascript
remove(index) {
    /* When the list is empty */
    if(this.isEmpty()) {
        return null
    } else if(this.length === 1) {
    /* When the list is empty */
    const nodeToRemove = this.head
    this.head = null;
    this.tail = null
    this.length--
    return nodeToRemove;
    }
}
```

### When there is more than one node in the list
```javascript
remove(index) {
    /* When the list is empty */
    if(this.isEmpty()) {
        return null
    } else if(this.length === 1) {
    /* When the list is empty */
    const nodeToRemove = this.head
    this.head = null;
    this.tail = null
    this.length--
    return nodeToRemove;
    } else if(index == 0) {

    } else {
            let leader = this.traverseNode(idx-1);
            let unWantedNode = leader.next;
            leader.next = unWantedNode.next;
            this.length--;
    }
}

traverseNode(index) {
        let count = 0
        let currentNode = this.head
        while (count !== index) {
            currentNode = currentNode.next;
            count++
        }
        return currentNode
    }
```








