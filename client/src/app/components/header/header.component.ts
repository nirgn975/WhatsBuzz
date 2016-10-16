import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked(link) {
    switch (link) {
      case 'Main':
        console.log('Main');
        break;
      case 'Facebook-Games':
        console.log('Facebook-Games');
        break;
      case 'Test-Yourself':
        console.log('Test-Yourself');
        break;
      case 'Trends':
        console.log('Trends');
        break;
    }
  }

}
