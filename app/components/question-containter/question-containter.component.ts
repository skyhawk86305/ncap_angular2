import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { HomeComponent } from '../home/home.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { DiagnosticComponent } from '../diagnostic/diagnostic.component';
import { Question } from  '../../../app/types/question';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../app/vanilla-singletons/navigation.singleton';
import { USERINPUT_SCENARIO1 } from  '../../../app/seed-data-for-debugging/json-user-input-senario1';

@Component({
    selector: 'page',
    templateUrl: 'app/components/question-containter/question-containter.html',
    directives: [NgSwitchQuestionComponent, HomeComponent, TooltipComponent, DiagnosticComponent]
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
        // xyzzy Move to a Scenario service
        console.log('** in ngOnInit for pageController');

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

        NavigationSingleton.instanceOf().registerQuestionContainerComponent(this);
        this.refreshFromModel();
    }

    public refreshFromModel() {
        this.questions = NavigationSingleton.instanceOf().getQuestionsToRender();
    }

}
