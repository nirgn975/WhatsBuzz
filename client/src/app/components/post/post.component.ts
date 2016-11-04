import { Component, Input } from '@angular/core';

@Component({
  selector: 'wb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post;

}
