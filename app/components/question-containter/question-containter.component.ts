import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ValidationResult } from  '../../../app/types/enums/validation-result.enum';
import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { HomeComponent } from '../home/home.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { DiagnosticComponent } from '../diagnostic/diagnostic.component';
import { Question } from  '../../../app/types/question';
import { SeedDataService } from '../../../app/services/seed-data.service';
import { UserInputSingleton } from '../../../app/services/vanilla-singleton/user-input.singleton';
import { NavigationSingleton } from '../../../app/services/vanilla-singleton/navigation.singleton';
import { ValidationSingleton } from '../../../app/services/vanilla-singleton/validation.singleton';
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
        private _loadJsonDataService: SeedDataService,
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        // xyzzy Move to a Scenario service
        console.log("** in ngOnInit for pageController");

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

        this.getQuestionsToRender();

        NavigationSingleton.instanceOf().registerQuestionContainerComponent(this);
    }

    // xyzzy5 - try to remove dependance on this method + trigger when necssary from a Singleton
    runValidationOnCurrentQuestions(): ValidationResult {
        let aggregateResult: ValidationResult = ValidationSingleton.instanceOf()
            .validateQuestionArray(this.questions);
        return aggregateResult;
    }

    getQuestionsToRender() {
        // filter the quesions to the page we are concerned with
        let pageId = NavigationSingleton.instanceOf().getCurrentPageNumber();
        console.log("fff pageId " + pageId);
        this.questions = this._loadJsonDataService.getQuestionsForPage(pageId);

        // Todo: hack, improve later
        this.renderButtons = pageId > 2;

        console.log('qu count is ' + this.questions.length);
    }

    next() {
        console.log('Clicked next on pageController');

        let aggregateResult = this.runValidationOnCurrentQuestions();

        // Requested Validation is only asked for up to three times 
        if (aggregateResult === ValidationResult.requested) {
            if (NavigationSingleton.instanceOf().shownRequestedValidation >= 3) {
                aggregateResult = ValidationResult.ok;
            }
            NavigationSingleton.instanceOf().shownRequestedValidation++;
        }

        // If validation should be show update show_validation property in the questions
        if (aggregateResult !== ValidationResult.ok) {
            for (let curQuestion of this.questions) {
                curQuestion.show_validation = true;
            }
        }

        // If validation was ok, then let go to the next page
        if (aggregateResult === ValidationResult.ok) {
            NavigationSingleton.instanceOf().next();
        } else {
            console.log('Aggregate validation is ' + ValidationResult[aggregateResult]);
        }

    }
}
