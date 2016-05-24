import { Component } from 'angular2/core';
import { PageQuestion } from '../../../../app/types/database-data/page-question';
import { pageQuestionDict } from '../../../../app/seed-data/page_question_dict';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
    selector: 'json-stringify-page-question',
    templateUrl: 'app/components/diagnostic/json-stringify-page-question/json-stringify-page-question.html'
})
export class JsonStringifyPageQuestionComponent {
    page: number = NavigationSingleton.instanceOf().getCurrentPageNumber();
    questionNumber: number = 1;
    json: string;

    clicked(event: any) {
        let pageQuestion: PageQuestion = pageQuestionDict[+this.page].find((x) => x.sre_sort_order === +this.questionNumber);
        this.json = JSON.stringify(pageQuestion);
    }
}
