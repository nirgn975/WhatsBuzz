import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Input() post;
}
