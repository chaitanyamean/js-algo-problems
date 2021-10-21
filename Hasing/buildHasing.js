class HashEntry {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}

let hash = new HashEntry(3, "Educative");
console.log(hash);

class HashTable {
  constructor() {
    this.size = 0;
    this.slots = 10;
    this.bucket = [];
    for (let i = 0; i < this.slots; i++) {
      this.bucket[i] = null;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  getIndex(key){
	let index = key % this.slots;
	return index;
}
}

let hashTable = new HashTable();

HashTable.prototype.resize = function resize123(){
    
}
console.log(hashTable);