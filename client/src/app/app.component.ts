import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './shared/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    // this.appService.getDummyData().subscribe(
    //   (res) => this.title = res
    // );
  }
}
