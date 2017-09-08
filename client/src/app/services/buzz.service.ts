import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BuzzResponse } from '../models/buzz';

import { environment } from '../../environments/environment';

@Injectable()
export class BuzzService {

  constructor(
    private http: Http,
  ) { }

  getBuzz(): Observable<BuzzResponse> {
    const options = this.appendToken();

    return this.http.get(`/api/buzz`, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private appendToken(): RequestOptions {
    const headers = new Headers();
    headers.append('Authorization', 'Token 3a84e4c37171a9ca1ad89584dd8312c25ffbe155');
    return new RequestOptions({ headers: headers });
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
