import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { PrePost } from '../models/pre-post';

@Injectable()
export class BuzzService {
  private headers;

  constructor(
    private http: Http,
  ) {
    this.headers = new Headers();
    this.headers.append('Accept-Language', 'he');
  }

  getBuzzPosts(): Observable<PrePost[]> {
    let options = new RequestOptions({ headers: this.headers });

    return this.http.get(`${environment.API_PATH}/buzz`, options)
      .map(res => res.json().results)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
