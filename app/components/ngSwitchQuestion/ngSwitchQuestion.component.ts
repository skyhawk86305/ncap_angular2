import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { RadioButtonComponent  } from '../radiobutton/radiobutton.component';

import { Question } from '../../seedData/question';

@Component({
    selector: 'ng-switch-question',
    templateUrl: 'app/components/ngSwitchQuestion/ngSwitchQuestion.html',
    //,  styleUrls: ['app/example/dashboard.component.css']
    directives: [RadioButtonComponent]
})
export class NgSwitchQuestionComponent implements OnInit {

    @Input() question: Question;

    constructor(
        private _router: Router
    ) {
    }

    ngOnInit() {
    }
}
