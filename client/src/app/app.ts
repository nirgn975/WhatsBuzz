import { Component} from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Home } from './home/home.component';
import { PrivacyPolicy } from './privacy-policy/privacy-policy.component';
import { TestYourself } from './test-yourself/test-yourself.component';
import { FacebookGames } from './facebook-games/facebook-games.component';

import { CardService } from './shared/card/card.service';
import { BuzzService } from './shared/buzz/buzz.service';

import { Nav } from './shared/nav/nav.component';
import { Footer } from './shared/footer/footer.component';

@Component({
    selector: 'app',
    providers: [CardService, BuzzService],
    pipes: [],
    directives: [Nav, Footer, ROUTER_DIRECTIVES],
    templateUrl: 'app/app.html',
})
@RouteConfig([
    { path: '/home',            component: Home,            name: 'Home', useAsDefault: true },
    { path: '/privacy-policy',  component: PrivacyPolicy,   name: 'PrivacyPolicy' },
    { path: '/test-yourself',   component: TestYourself,    name: 'TestYourself' },
    { path: '/facebook-games',  component: FacebookGames,   name: 'FacebookGames' },
])
export class App {

    constructor() {}

}