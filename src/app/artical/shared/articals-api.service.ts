import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticalsApiService {

  constructor(private http: HttpClient) { }

  getArticalById(rentalId: string): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + rentalId);
  }

  getArticals(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/');
  }

}
