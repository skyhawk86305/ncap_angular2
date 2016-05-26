import { Component, OnInit, Input } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ShowJsonComponent } from '../../diagnostic/show-json/show-json.component';
import { JsonStringifyPageQuestionComponent } from '../../diagnostic/json-stringify-page-question/json-stringify-page-question.component';
import { ModifyUserInputComponent } from '../../diagnostic/modify-user-input/modify-user-input.component';
import { NgSwitchQuestionComponent } from '../../question-level-elements/ng-switch-question/ng-switch-question.component';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { SeedDataSingleton } from '../../../../app/vanilla-singletons/seed-data.singleton';
import { ValidationSingleton } from '../../../../app/vanilla-singletons/validation.singleton';
import { ValidationResult } from '../../../../app/types/enums/validation-result.enum';

@Component({
    selector: 'question-container',
    templateUrl: 'app/components/page-level/question-container/question-container.html',
    directives: [JsonStringifyPageQuestionComponent, ModifyUserInputComponent, ShowJsonComponent, NgSwitchQuestionComponent]
})
export class QuestionContainerComponent implements OnInit {

    @Input() pageId: number;
    renderButtons: boolean = true;
    protected navigationSingleton = NavigationSingleton.instanceOf();
    protected validationSingleton = ValidationSingleton.instanceOf();
    protected ValidationResult = ValidationResult;
    public SeedDataSingleton = SeedDataSingleton;

    constructor(
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        //this.questions = SeedDataSingleton.instanceOf().getQuestionsForPage(this.pageId);
        //this.handleUrlParameters();
        // NavigationSingleton.instanceOf().registerAsObserver(this);
        // this.oberservedDataChanged();
    }

    // public oberservedDataChanged() {
    //     let data = NavigationSingleton.instanceOf().getQuestionsToRender();
    //     this.questions = data.questions;
    //     this.renderButtons = data.renderButtons;
    // }

    // private handleUrlParameters() {
    //     // xyzzy Move all below to a Scenario service/ singleton

    //     // Is a pageID in the URL?
    //     let requestedPageId = +this._routeParams.get('pageId');
    //     if (requestedPageId) {
    //         NavigationSingleton.instanceOf().setPageNumber(requestedPageId);
    //     }

    //     // Is a scenarioID in the URL?
    //     let scenarioId = +this._routeParams.get('scenarioId');
    //     if (scenarioId) {
    //         UserInputSingleton.instanceOf().defaultUserInput(USERINPUT_SCENARIO1);
    //         NavigationSingleton.instanceOf().setPageNumber(3);
    //     }

    //     if (this._routeParams.get('diag')) {
    //         // enable Diag mode
    //         NavigationSingleton.instanceOf().diagMode = true;
    //     }
    // }
}
