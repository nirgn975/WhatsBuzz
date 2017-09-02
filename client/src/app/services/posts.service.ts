import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { PostResponse } from '../models/post';;

import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {

  constructor(
    private http: Http,
  ) { }

  getTrendsPosts(): Observable<PostResponse> {
    return this.http.get(`/api/trends`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getFacebookGamesPosts(): Observable<PostResponse> {
    return this.http.get(`/api/facebook-games`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
