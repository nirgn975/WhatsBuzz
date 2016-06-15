import { Component, Input } from '@angular/core';

import { Card } from './card.service';
import { DetailCardComponent } from '../../detail-card/detail-card.component';

@Component({
    selector: 'wb-card',
    templateUrl: 'app/shared/card/card.component.html',
    styleUrls: ['app/shared/card/card.component.css']
})

export class CardComponent {
    @Input card: Card;

    constructor () {}
}