import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BuzzService } from './buzz.service';


@Component({
  selector: 'wb-buzz',
  host: {
    class: 'col-sm-4'
  },
  templateUrl: 'app/shared/buzz/buzz.component.html',
  styleUrls: ['app/shared/buzz/buzz.component.css'],
  providers: []
})

export class BuzzComponent implements OnInit {
  buzzPosts: Observable<any[]>;
  errorMessage: String;

  constructor(private buzzService: BuzzService) { }

  ngOnInit() {
    this.getBuzz();
  }

  getBuzz() {
    this.buzzPosts = this.buzzService.getBuzzList();
  }
}