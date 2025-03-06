import { Component } from '@angular/core';
import { BookService } from '../../book.service';
import { Book } from '../../book.model';
import { Router } from '@angular/router'; // Import Router for navigation
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule], // Import FormsModule here for ngModel
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {
  bookName: string = '';
  bookAuthor: string = '';
  bookPages: number = 0;
  bookHasPictures: boolean = false;

  constructor(private bookService: BookService, private router: Router) {}

  addBook() {
    if (
      this.bookName &&
      this.bookAuthor &&
      this.bookPages &&
      this.bookHasPictures
    ) {
      const newBook: Book = {
        name: this.bookName,
        author: this.bookAuthor,
        numberOfPages: this.bookPages,
        hasPictures: this.bookHasPictures,
      };
      this.bookService.addBook(newBook);
      this.bookName = '';
      this.bookAuthor = '';
      this.bookPages = 0;
      this.bookHasPictures = false;

      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']); // Navigate to the main page
  }
}
