import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(
    private http: Http
  ) { }

  getDummyData() {
    return this.http.get('http://localhost:8000/api/users/')
      .map((res: Response) => res.json())
      .map(data => {
        return data.results[0].username
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
