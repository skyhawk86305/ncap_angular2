import { Component, Input, OnInit } from 'angular2/core';

import { HomeComponent } from '../home/home.component';
import { ConsentComponent } from '../consent/consent.component';
import { DateComponent } from '../date/date.component';
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
    directives: [HomeComponent, RadioButtonComponent, DateComponent,
        ConsentComponent, MatrixComponent, SectionTitleComponent,
        PreQuestionIntroComponent]
})
export class NgSwitchQuestionComponent implements OnInit {

    @Input() question: QuestionNew;

    renderingAnswerComponent: boolean = false;

    // Permit view to use the enumeration types
    AnswerCategory = AnswerCategory;
    FormatCategory = FormatCategory;

    ngOnInit() {
        switch (this.question.sre_anca_id) {
            case AnswerCategory.Consent, AnswerCategory.RadioButtons, AnswerCategory.Date_MonthDayYear,
                AnswerCategory.MatrixRadioButtons, AnswerCategory.MatrixRadioButtons_TextboxLastRow:
                this.renderingAnswerComponent = true;
                break;
        }

        if (this.question.sre_anca_id === AnswerCategory.Home && this.question.sort_order > 1) {
            this.question.sre_anca_id = AnswerCategory.Skip;
        }

        if (this.question.sre_anca_id === AnswerCategory.Consent && this.question.sort_order > 1) {
            this.question.sre_anca_id = AnswerCategory.Skip;
        }


    }
}