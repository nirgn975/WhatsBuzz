import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { FacebookGame, Trend } from '../models';

@Injectable()
export class PostsService {

  constructor(
    private http: Http
  ) { }

  getFacebookGamePosts(): Observable<FacebookGame[]> {
    let headers = new Headers();
    headers.append('Accept-Language', 'he');
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${environment.API_PATH}/facebook-games`, options)
      .map(res => res.json().results)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  getTrendPosts(): Observable<Trend[]> {
    let headers = new Headers();
    headers.append('Accept-Language', 'he');
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${environment.API_PATH}/trends`, options)
      .map(res => res.json().results)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
