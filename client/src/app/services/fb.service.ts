import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FacebookService, InitParams } from 'ngx-facebook';

@Injectable()
export class FbService {

  constructor(
    private fb: FacebookService,
  ) { }

  initFbService(): Observable<any> {
    let initParams: InitParams = {
      appId: '1063610257017045',
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
    return Observable.of(this.fb);
  }

}
