import { Component } from '@angular/core';
import { BookService } from '../../book.service';
import { Book } from '../../book.model';
import { Router } from '@angular/router'; // Import Router for navigation
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // Import CommonModule for ngIf and ngFor
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    FormsModule, // Import FormsModule for ngModel
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
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
      this.bookHasPictures !== undefined
    ) {
      const newBook: Book = {
        title: this.bookName,
        author: this.bookAuthor,
        pageDetails: {
          numberOfPages: this.bookPages,
          hasPicture: this.bookHasPictures,
        },
      };

      this.bookService.addBook(newBook).subscribe({
        next: (response) => {
          console.log('Book added successfully:', response);
          this.bookName = '';
          this.bookAuthor = '';
          this.bookPages = 0;
          this.bookHasPictures = false;

          // Navigate to another page
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error adding book:', error);
        },
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
