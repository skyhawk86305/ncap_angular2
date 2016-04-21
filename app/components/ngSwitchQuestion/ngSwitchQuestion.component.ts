import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'ng-switch-question',
    templateUrl: 'app/components/ngSwitchQuestion/ngSwitchQuestion.html'
    //,  styleUrls: ['app/example/dashboard.component.css']
})
export class NgSwitchQuestionComponent implements OnInit {

    //   @Input() question: Question;

    constructor(
        private _router: Router
    ) {
    }

    ngOnInit() {
    }
}
