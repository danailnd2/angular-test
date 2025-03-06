import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'books';

  constructor(private httpService: HttpService) {}

  // Add a new book
  addBook(newBook: Book): Observable<Book> {
    return this.httpService.post<Book>(this.apiUrl, newBook); // POST request
  }

  // Get all books
  getBooks(): Observable<Book[]> {
    return this.httpService.get<Book[]>(this.apiUrl); // GET request
  }
}
