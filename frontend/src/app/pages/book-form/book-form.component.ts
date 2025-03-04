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

  constructor(private bookService: BookService, private router: Router) {}

  addBook() {
    if (this.bookName && this.bookAuthor) {
      const newBook: Book = {
        name: this.bookName,
        author: this.bookAuthor,
      };
      this.bookService.addBook(newBook);
      this.bookName = ''; // Clear the input fields
      this.bookAuthor = '';
      this.router.navigate(['/']); // Automatically navigate back to the Book List
    }
  }

  goBack() {
    this.router.navigate(['/']); // Navigate to the main page
  }
}
