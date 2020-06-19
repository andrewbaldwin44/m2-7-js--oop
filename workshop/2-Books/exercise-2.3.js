class Book {
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }

  add(book) {
    this.books.push(book);
    if (!this.currentlyReading) this.currentlyReading = book;
  }

  getNumRead() {
    return this.books.filter(book => book.isRead).length;
  }

  getNumUnread() {
    return this.books.filter(book => !book.isRead).length
  }
}

const homeLibrary = new BookList();

homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));

homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);

console.log(homeLibrary.getNumUnread());
console.log(homeLibrary.getNumRead());
