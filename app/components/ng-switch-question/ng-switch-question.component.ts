import { Component, Input } from 'angular2/core';

import { HomeComponent } from '../home/home.component';
import { ConsentComponent } from '../consent/consent.component';
import { DayMonthYearComponent } from '../date/date.component';
import { RadioButtonComponent } from '../radiobutton/radiobutton.component';
import { MatrixComponent } from '../matrix/matrix.component';

import { Question } from  '../../../app/types/question';

@Component({
    selector: 'ng-switch-question',
    templateUrl: 'app/components/ng-switch-question/ng-switch-question.html',
    directives: [HomeComponent, RadioButtonComponent, DayMonthYearComponent, ConsentComponent, MatrixComponent]
})
export class NgSwitchQuestionComponent {

    @Input() question: Question;
    
}
