import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../../book.model';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-book-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
})
export class BookDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Book) {}
}
