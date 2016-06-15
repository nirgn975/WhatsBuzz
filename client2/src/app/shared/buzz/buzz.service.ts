import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CONFIG } from '../../config';

// import { Card } from './card.component';

@Injectable()
export class BuzzService {

  constructor(private http: Http) {}

  getBuzzList() {
    return this.http.get(CONFIG.baseUrls + 'buzz/?format=json')
      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
