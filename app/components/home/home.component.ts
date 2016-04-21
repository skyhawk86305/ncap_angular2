import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    //,  styleUrls: ['app/example/dashboard.component.css']
    //directives: [RadioButtonComponent]
})
export class HomeComponent implements OnInit {

    constructor(
        private _router: Router
    ) {
    }

    ngOnInit() {
    }
}
