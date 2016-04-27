import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { HomeComponent } from '../home/home.component';
import { ConsentComponent } from '../consent/consent.component';
import { DayMonthYearComponent } from '../dateMonthDayYear/dateMonthDayYear.component';
import { RadioButtonComponent } from '../radiobutton/radiobutton.component';
import { MatrixComponent } from '../matrix/matrix.component';

import { Question } from  '../../../app/types/question';

@Component({
    selector: 'ng-switch-question',
    templateUrl: 'app/components/ngSwitchQuestion/ngSwitchQuestion.html',
    directives: [HomeComponent, RadioButtonComponent, DayMonthYearComponent, ConsentComponent, MatrixComponent]
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
