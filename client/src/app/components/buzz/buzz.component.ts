import { Component, OnInit } from '@angular/core';

import { BuzzService } from '../../services';
import { Buzz } from '../../models';

@Component({
  selector: 'wb-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.scss']
})
export class BuzzComponent implements OnInit {
  private buzz: Buzz[];

  constructor(
    private buzzService: BuzzService
  ) { }

  ngOnInit() {
    this.buzzService.getBuzzPosts().subscribe(
      res => {this.buzz = res; console.log(res)}
    );
  }
}
