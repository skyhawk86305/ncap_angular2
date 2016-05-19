import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { DiagnosticComponent } from '../diagnostic/diagnostic.component';
import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { NavigationSingleton } from '../../../app/vanilla-singletons/navigation.singleton';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { USERINPUT_SCENARIO1 } from  '../../../app/seed-data/json-for-debugging/user-input-senario1';
import { PageQuestion } from '../../../app/types/database-data/new/page-question';

@Component({
    selector: 'page',
    templateUrl: 'app/components/question-containter/question-containter.html',
    directives: [NgSwitchQuestionComponent, DiagnosticComponent]
})
export class QuestionContainerComponent implements OnInit {

    questions: PageQuestion[];
    renderButtons: boolean = true;
    that: QuestionContainerComponent;

    public NavigationSingleton = NavigationSingleton;

    constructor(
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        this.handleUrlParameters()
        NavigationSingleton.instanceOf().registerAsObserver(this);
        this.oberservedDataChanged();
    }

    public oberservedDataChanged() {
        let data = NavigationSingleton.instanceOf().getQuestionsToRender();
        this.questions = data.questions;
        this.renderButtons = data.renderButtons;
    }

    private handleUrlParameters() {
        // xyzzy Move all below to a Scenario service/ singleton

        // Is a pageID in the URL?
        let requestedPageId = +this._routeParams.get('pageId');
        if (requestedPageId) {
            NavigationSingleton.instanceOf().setPageNumber(requestedPageId);
        }

        // Is a scenarioID in the URL?
        let scenarioId = +this._routeParams.get('scenarioId');
        if (scenarioId) {
            UserInputSingleton.instanceOf().defaultUserInput(USERINPUT_SCENARIO1);
            NavigationSingleton.instanceOf().setPageNumber(3);
        }

        if (this._routeParams.get('diag')) {
            // enable Diag mode
            NavigationSingleton.instanceOf().diagMode = true;
        }
    }
}
