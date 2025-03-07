import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // You can still use RxJS Observables for asynchronous behavior

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://localhost:5000/api/';

  constructor() {}

  // POST request using fetch API
  post<T>(endpoint: string, body: T): Observable<T> {
    return new Observable((observer) => {
      fetch(`${this.apiUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  // GET request using fetch API
  get<T>(endpoint: string): Observable<T> {
    return new Observable((observer) => {
      fetch(`${this.apiUrl}${endpoint}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
