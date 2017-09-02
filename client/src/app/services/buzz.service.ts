import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BuzzResponse } from '../models/buzz';;

import { environment } from '../../environments/environment';

@Injectable()
export class BuzzService {

  constructor(
    private http: Http,
  ) { }

  getBuzz(): Observable<BuzzResponse> {
    return this.http.get(`/api/buzz`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
