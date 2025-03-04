import { Route } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';

export const routes: Route[] = [
  { path: '', component: BookListComponent }, // Main page to list books
  { path: 'add', component: BookFormComponent }, // Add book page
];
