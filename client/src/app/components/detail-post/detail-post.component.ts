import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { DetailPostActions } from '../../actions';
import { DetailPost } from '../../models';

@Component({
  selector: 'wb-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {
  private detailPost: Observable<DetailPost>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private detailPostActions: DetailPostActions
  ) { }

  ngOnInit() {
    let postId = this.route.snapshot.params['uuid'];
    this.store.dispatch(this.detailPostActions.loadDetailPost(postId));
  }

}
