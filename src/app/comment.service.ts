import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  uri = 'http://localhost:4000/comment';

  constructor(private http: HttpClient) { }

  addComment(comment_text) {
    const obj = {
      comment_text: comment_text,
      upvote_count: 0,
      downvote_count: 0
    };
    console.log(obj);
    return this.http.post(`${this.uri}/add`, obj);
        // .subscribe(res => console.log('Done'));
  }

  getComments() {
    return this
           .http
           .get(`${this.uri}`);
  }

  upvoteComment(id) {
    const obj = {
    };
    // console.log(id);
    return this
            .http
            .post(`${this.uri}/upvote/${id}`,obj);
            // .subscribe(res => console.log('Upvoted'));
    }
  
  downvoteComment(id) {
    const obj = {};
    return this
            .http
            .post(`${this.uri}/downvote/${id}`,obj);
            // .subscribe(res => console.log('Downvoted'));
    }
}
