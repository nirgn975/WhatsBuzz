import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { environment } from '../../environments/environment';
import { FacebookGame, Trend } from '../models';

@Injectable()
export class PostsService {
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

  getFacebookGamePosts(page): Observable<FacebookGame[]> {
    this.params.set('page', page);
    let options = new RequestOptions({
      headers: this.headers, search: this.params
    });

    return this.http.get(`${environment.API_PATH}/facebook-games`, options)
      .map(res => res.json().results)
      .catch(this.handleError);
  }

  getTrendPosts(page): Observable<Trend[]> {
    this.params.set('page', page);
    let options = new RequestOptions({
      headers: this.headers, search: this.params
    });

    return this.http.get(`${environment.API_PATH}/trends`, options)
      .map(res => res.json().results)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
