import { Component, Input, OnInit } from 'angular2/core';

import { HomeComponent } from '../home/home.component';
import { ConsentComponent } from '../consent/consent.component';
import { DayMonthYearComponent } from '../date/date.component';
import { RadioButtonComponent } from '../radiobutton/radiobutton.component';
import { MatrixComponent } from '../matrix/matrix.component';

import { QuestionNew } from  '../../../app/types/question-new';
import { AnswerCategory } from '../../../app/types/enums/answer-category';
import { FormatCategory } from '../../../app/types/enums/format-category';

@Component({
    selector: 'ng-switch-question',
    templateUrl: 'app/components/ng-switch-question/ng-switch-question.html',
    directives: [HomeComponent, RadioButtonComponent, DayMonthYearComponent, ConsentComponent, MatrixComponent]
})
export class NgSwitchQuestionComponent implements OnInit {

    @Input() question: QuestionNew;
    //@Input() page: SurveyPageSre;

    // Permit view to use the enumeration types
    AnswerCategory = AnswerCategory;
    FormatCategory = FormatCategory;

    ngOnInit() {
        //var temp = AnswerCategory[this.question.sre_anca_id];
        //console.log(temp);
        //this.question.a
        //this.sre.answerCategory = this.getAnswerCategory(this.sre.sre_anca_id);
    }

    // private getAnswerCategory(anca_id: number): string {
    //     let result: string = AnswerCategory[anca_id];
    //     console.log(result);

    //     return result;
    //}


}
