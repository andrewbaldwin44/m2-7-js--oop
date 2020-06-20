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

  lookupBook(bookTitle) {
    return this.books.find((book) => book.title === bookTitle);
  }

  startReading(bookTitle) {
    this.currentlyReading = this.lookupBook(bookTitle);
  }

  finishReading(bookTitle) {
    this.lastRead = this.lookupBook(bookTitle);
    this.lastRead.isRead = true;
    this.currentlyReading = null;
  }

  getNumRead() {
    return this.books.filter(book => book.isRead).length;
  }

  getNumUnread() {
    return this.books.filter(book => !book.isRead).length
  }
}
