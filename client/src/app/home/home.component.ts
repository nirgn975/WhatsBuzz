import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BuzzComponent } from '../shared/buzz/buzz.component';
import { Card, CardService } from '../shared/card/card.service';
import {CardComponent} from "../shared/card/card.component";


@Component({
    selector: 'wb-home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],
    providers: [],
    directives: [BuzzComponent, CardComponent],
    pipes: []
})

export class Home implements OnInit{
    facebookCards: Observable<Card[]>;
    testYourselfCards: Observable<Card[]>;
    errorMessage: String;

    constructor(
      private cardService: CardService
    ) {}

    ngOnInit() {
        this.getFacebookCards();
        this.getTestYourselfCards();
    }

    getFacebookCards() {
        this.facebookCards = this.cardService.getCards('facebook_games', 5);
    }

    getTestYourselfCards() {
        this.testYourselfCards = this.cardService.getCards('test_yourself', 5);
    }

}
