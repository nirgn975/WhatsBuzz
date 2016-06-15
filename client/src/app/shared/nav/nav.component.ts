import { Component } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';


@Component({
    selector: 'wb-nav',
    templateUrl: 'app/shared/nav/nav.component.html',
    styleUrls: ['app/shared/nav/nav.component.css'],
    directives: [ROUTER_DIRECTIVES],
})

export class Nav {

    constructor() {

    }

}
