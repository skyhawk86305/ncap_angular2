import { Component, Input, OnInit } from 'angular2/core';

import { HomeComponent } from '../home/home.component';
import { ConsentComponent } from '../consent/consent.component';
import { DayMonthYearComponent } from '../date/date.component';
import { RadioButtonComponent } from '../radiobutton/radiobutton.component';
import { MatrixComponent } from '../matrix/matrix.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { PreQuestionIntroComponent } from '../pre-question-intro/pre-question-intro.component';

import { QuestionNew } from  '../../../app/types/question-new';
import { AnswerCategory } from '../../../app/types/enums/answer-category';
import { FormatCategory } from '../../../app/types/enums/format-category';

@Component({
    selector: 'ng-switch-question',
    templateUrl: 'app/components/ng-switch-question/ng-switch-question.html',
    directives: [HomeComponent, RadioButtonComponent, DayMonthYearComponent,
        ConsentComponent, MatrixComponent, SectionTitleComponent,
        PreQuestionIntroComponent ]
})
export class NgSwitchQuestionComponent implements OnInit {

    @Input() question: QuestionNew;

    // Permit view to use the enumeration types
    AnswerCategory = AnswerCategory;
    FormatCategory = FormatCategory;

    ngOnInit() {
    }
}
