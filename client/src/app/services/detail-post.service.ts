import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { environment } from '../../environments/environment';
import { DetailPost } from '../models';

@Injectable()
export class DetailPostService {
  private headers;
  private params;

  constructor(
    private http: Http,
    private translate: TranslateService
  ) {
    this.headers = new Headers();
    this.headers.append('Accept-Language', this.translate.currentLang);

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
    this.params.set('unique_id', gameData.unique_id);
    let options = new RequestOptions({
      headers: this.headers, search: this.params
    });

    return this.http.get(`${environment.API_PATH}/create-game`, options)
      .map(res => res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
