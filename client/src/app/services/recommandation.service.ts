import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { environment } from '../../environments/environment';
import { FacebookGame } from '../models';

@Injectable()
export class RecommandationService {
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

  getRecommendation(category): Observable<FacebookGame[]> {
    this.params.set('age_categories', category);
    let options = new RequestOptions({
      headers: this.headers, search: this.params
    });

    return this.http.get(`${environment.API_PATH}/age-categories`, options)
      .map(res => res.json().results)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
