import { Component } from '@angular/core';

import { BuzzComponent } from '../shared/buzz/buzz.component';


@Component({
    selector: 'wb-test-yourself',
    templateUrl: 'app/test-yourself/test-yourself.component.html',
    styleUrls: ['app/test-yourself/test-yourself.component.css'],
    directives: [BuzzComponent],
})

export class TestYourself {

    constructor() {

    }

}
