import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { DetailPost } from '../models/detail-post';

@Injectable()
export class DetailPostService {
  private headers;
  private params;

  constructor(
    private http: Http,
  ) {
    this.headers = new Headers();
    this.headers.append('Accept-Language', 'he');

    this.params = new URLSearchParams();
  }

  getDetailPost(postId): Observable<DetailPost> {
    let options = new RequestOptions({ headers: this.headers });

    return this.http.get(`${environment.API_PATH}/posts/${postId}`, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getGame(gameData): Observable<{}> {
    this.params.set('userID', gameData.userID);
    this.params.set('accessToken', gameData.accessToken);
    this.params.set('uniqueId', gameData.unique_id);
    this.params.set('postLanguage', 'he');
    let options = new RequestOptions({
      headers: this.headers, search: this.params
    });

    return this.http.get(`${environment.API_PATH}/get-game`, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
