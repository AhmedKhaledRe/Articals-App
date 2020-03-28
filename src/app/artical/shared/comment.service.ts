import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './comment.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {}

  public getPostComments(articalId: string): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + articalId + '/comments');
  }
}
