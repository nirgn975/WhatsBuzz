import { Component } from '@angular/core';

import { BuzzComponent } from '../shared/buzz/buzz.component'


@Component({
    selector: 'wb-about',
    templateUrl: 'app/privacy-policy/privacy-policy.component.html',
    styleUrls: ['app/privacy-policy/privacy-policy.component.css'],
    directives: [BuzzComponent]
})

export class PrivacyPolicy {

    constructor() {

    }

}
