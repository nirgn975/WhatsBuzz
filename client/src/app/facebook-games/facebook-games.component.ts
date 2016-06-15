import { Component } from '@angular/core';

import { BuzzComponent } from '../shared/buzz/buzz.component';


@Component({
    selector: 'wb-facebook-games',
    templateUrl: 'app/facebook-games/facebook-games.component.html',
    styleUrls: ['app/facebook-games/facebook-games.component.css'],
    directives: [BuzzComponent, ],
})

export class FacebookGames {
    
    constructor() { }

}
