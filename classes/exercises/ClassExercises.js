// Define your Book class here:


// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
const { log } = require("console");

class book{
  constructor (title, author, copyright, isbn, pages, timesCheckedOut, discarded){
    this.title = title;
    this.author = author;
    this.copyright = copyright;
    this.isbn = isbn;
    this.pages = pages;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded;
  }
  checkout(uses=1){
    this.timesCheckedOut += uses;
  }
}

class manual extends book {
  constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
    super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
  }
  dispose(currentYear){
    if (currentYear-this.copyright > 5) {
      this.discarded = 'Yes';
    }
  }
}

class novel extends book {
  constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
    super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
  }
  dispose(){
    if (this.timesCheckedOut > 100){
      this.discarded = 'Yes';
    }
  }
}

let prideAndPrejudice = new novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let makingTheShip = new manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1, 'No');

prideAndPrejudice.checkout(5);
makingTheShip.dispose;

console.log(makingTheShip)