import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { environment } from '../../environments/environment';
import { Buzz } from '../models';

@Injectable()
export class BuzzService {
  constructor(
    private http: Http,
    private translate: TranslateService
  ) {}

  getBuzzPosts(): Observable<Buzz[]> {
    let headers = new Headers();
    headers.append('Accept-Language', this.translate.currentLang);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${environment.API_PATH}/buzz`, options)
      .map(res => res.json().results)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
