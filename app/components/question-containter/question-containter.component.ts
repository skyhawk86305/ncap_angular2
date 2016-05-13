import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { DiagnosticComponent } from '../diagnostic/diagnostic.component';
import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { Question } from  '../../../app/types/question';
import { NavigationSingleton } from '../../../app/vanilla-singletons/navigation.singleton';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { USERINPUT_SCENARIO1 } from  '../../../app/seed-data-for-debugging/json-user-input-senario1';

@Component({
    selector: 'page',
    templateUrl: 'app/components/question-containter/question-containter.html',
    directives: [NgSwitchQuestionComponent, DiagnosticComponent]
})
export class QuestionContainerComponent implements OnInit {

    questions: Question[];
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
        this.questions = NavigationSingleton.instanceOf().getQuestionsToRender().questions;
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
