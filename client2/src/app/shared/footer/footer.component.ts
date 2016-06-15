import { Component } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';


@Component({
    selector: 'wb-footer',
    templateUrl: 'app/shared/footer/footer.component.html',
    styleUrls: ['app/shared/footer/footer.component.css'],
    directives: [ROUTER_DIRECTIVES],
})

export class Footer {

    constructor() {

    }

}
