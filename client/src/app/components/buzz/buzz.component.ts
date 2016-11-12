import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { FacebookService, FacebookInitParams } from 'ng2-facebook-sdk/dist';

import { AppState } from '../../reducers';
import { BuzzActions } from '../../actions';
import { PrePost } from '../../models';

@Component({
  selector: 'wb-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.scss']
})
export class BuzzComponent implements OnInit {
  private buzz: Observable<PrePost[]>;
  private loadBuzz: boolean = false;

  constructor(
    private store: Store<AppState>,
    private buzzActions: BuzzActions,
    private fb: FacebookService,
  ) {
    this.buzz = store.select(state => state.buzz);

    let fbParams: FacebookInitParams = {
      appId   : '1063610257017045',
      cookie  : true,  // enable cookies to allow the server to access the session
      xfbml   : true,  // parse social plugins on this page
      version : 'v2.7' // use graph api version 2.7
    };
    this.fb.init(fbParams);
  }

  ngOnInit() {
    if (!this.loadBuzz) {
      // Load Buzz posts only once.
      this.store.dispatch(this.buzzActions.loadBuzzs());
      this.loadBuzz = true;
    }
  }
}
