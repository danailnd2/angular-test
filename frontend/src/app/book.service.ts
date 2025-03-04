import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];

  // Add a new book
  addBook(book: Book) {
    this.books.push(book);
  }

  // Get all books
  getBooks() {
    return this.books;
  }
}
