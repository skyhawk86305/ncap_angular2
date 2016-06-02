import { Component } from 'angular2/core';
import { PageQuestion } from '../../../../app/types/database-data/page-question';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { SeedDataSingleton } from '../../../../app/vanilla-singletons/seed-data.singleton';

@Component({
    selector: 'json-stringify-page-question',
    templateUrl: 'app/components/diagnostic/json-stringify-page-question/json-stringify-page-question.html'
})
export class JsonStringifyPageQuestionComponent {
    pageId: number = NavigationSingleton.instanceOf().currentPageId;
    questionNumber: number = 1;
    json: string;

    clicked(event: any) {
        let pageQuestion: PageQuestion = SeedDataSingleton.instanceOf().getQuestionsForPage(this.pageId)[this.questionNumber];
        this.json = JSON.stringify(pageQuestion);
    }
}
