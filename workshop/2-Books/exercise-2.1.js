// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

const book1 = new Book('Harry Potter', 'Fantasy', 'J.K. Rowling', true);
const book2 = new Book('The Murder of Roger Ackroyd', 'Mystery', 'Agatha Christie', true);
const book3 = new Book('Death on the Nile', 'Mystery', 'Agatha Christie', false);
const book4 = new Book('A Fine Balance', 'Fiction', 'Rohinton Mistry', true);
const book5 = new Book('Cutting for Stone', 'Fiction', 'Abraham Verghese', false);

console.log(book1, book2, book3, book4, book5);
