import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Book } from '../../book.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Needed for ngFor
import { Subscription } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'; // import the dialog component

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  displayedColumns = ['title', 'author'];

  private booksSubscription: Subscription | undefined;

  constructor(
    private bookService: BookService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.booksSubscription = this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnDestroy(): void {
    if (this.booksSubscription) {
      this.booksSubscription.unsubscribe();
    }
  }

  goToAddPage(): void {
    this.router.navigate(['/add']);
  }

  onRowClicked(book: Book): void {
    this.dialog.open(BookDialogComponent, {
      data: book, // Passing the selected book as data
    });
  }
}
