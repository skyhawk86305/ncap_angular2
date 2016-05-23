import { Component, Input, OnInit } from 'angular2/core';
import { CheckboxesComponent } from '../checkboxes/checkboxes.component';
import { DateComponent } from '../date/date.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { TextboxComponent } from '../textbox/textbox.component';
import { RadioButtonComponent } from '../radiobutton/radiobutton.component';
import { MatrixComponent } from '../matrix/matrix.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { PreQuestionIntroComponent } from '../pre-question-intro/pre-question-intro.component';
import { AnswerCategory } from '../../../../app/types/enums/answer-category.enum';
import { FormatCategory } from '../../../../app/types/enums/format-category.enum';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
    selector: 'ng-switch-question',
    templateUrl: 'app/components/question-level-elements/ng-switch-question/ng-switch-question.html',
    directives: [RadioButtonComponent, CheckboxesComponent,
        DropdownComponent, DateComponent, TextboxComponent,
        MatrixComponent, SectionTitleComponent,
        PreQuestionIntroComponent]
})
export class NgSwitchQuestionComponent implements OnInit {

    @Input() question: PageQuestion;

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

        if (this.question.sre_anca_id === AnswerCategory.Home && this.question.sre_sort_order > 1) {
            this.question.sre_anca_id = AnswerCategory.Skip;
        }

        if (this.question.sre_anca_id === AnswerCategory.Consent && this.question.sre_sort_order > 1) {
            this.question.sre_anca_id = AnswerCategory.Skip;
        }
    }
}
