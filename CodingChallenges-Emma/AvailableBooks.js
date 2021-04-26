function Book(title,author,ISBN,numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  Book.prototype.getAvailability = function() {
      if(this.numCopies === 0) {
          return 'no copies'
      } else if (this.numCopies < 10) {
          return 'low stock'
      }
      return 'In Stock'
  }

  Book.prototype.sell = function(noOfCopies = 1) {
        this.numCopies -= noOfCopies
  }

  Book.prototype.reStock = function(noOfCopies = 5) {
    this.numCopies += noOfCopies
  }

  const hunger = new Book('hunger', 'me', '23232WE', 5)
  console.log(hunger.getAvailability())
  hunger.reStock(12)
  console.log(hunger.getAvailability())
  hunger.sell(17)
  console.log(hunger.getAvailability())




// Class Component

class Book {
    constructor(title, author, ISBN, noOfCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    getAvailability() {
        if (this.numCopies === 0) {
            return 'no copies'
        } else if (this.numCopies < 10) {
            return 'low stock'
        }
        return 'In Stock'
    }

    sell(noOfCopies = 1) {
        this.numCopies -= noOfCopies
    }

    restock(noOfCopies = 5) {
        this.numCopies += noOfCopies
    }
}