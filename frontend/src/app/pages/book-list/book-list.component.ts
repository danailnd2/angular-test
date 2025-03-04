import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Book } from '../../book.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Needed for ngFor

@Component({
  selector: 'app-book-list',
  standalone: true, // This tells Angular this is a standalone component
  imports: [CommonModule], // Import CommonModule for ngFor
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  goToAddPage(): void {
    this.router.navigate(['/add']); // Navigate to the add book page
  }
}
