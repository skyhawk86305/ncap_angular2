import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Question } from  '../../../app/types/question';
import { ValidationResult } from  '../../../app/types/enums/validation-result.enum';

import { LoadJsonDataService } from '../../../app/services/load.json.data.service';

import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { HomeComponent } from '../home/home.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { DiagnosticComponent } from '../diagnostic/diagnostic.component';

import { ApplicationStateService } from '../../../app/services/application.state.service';
import { ValidationService } from '../../../app/services/validation.service';

@Component({
    selector: 'page',
    templateUrl: 'app/components/page-controller/page-controller.html',
    directives: [NgSwitchQuestionComponent, HomeComponent, TooltipComponent, DiagnosticComponent]
})
export class PageControllerComponent implements OnInit {

    questions: Question[];
    renderButtons: boolean = true;
    that: PageControllerComponent;

    constructor(
        private _applicationStateService: ApplicationStateService,
        private _loadJsonDataService: LoadJsonDataService,
        private _validationService: ValidationService,
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        // Is a pageID in the URL?
        let requestedPageId = +this._routeParams.get('pageId');
        if (requestedPageId) {
            this._applicationStateService.setPageNumber(requestedPageId);
        }

        this.getQuestionsToRender();

        this._applicationStateService.registerPageControllerComponent(this);
    }

    getQuestionsToRender() {
        // filter the quesions to the page we are concerned with
        let pageId = this._applicationStateService.getCurrentPageNumber();
        this.questions = this._loadJsonDataService.getQuestionsForPage(pageId);

        // xyzzy hack, improve later
        this.renderButtons = pageId > 2;

        console.log('qu count is ' + this.questions.length);
    }

    runValidationOnCurrentQuestions(): ValidationResult {
        let aggregateResult: ValidationResult = ValidationResult.ok;

        for (let curQuestion of this.questions) {
            this._validationService.validateQuestion(curQuestion);

            if (curQuestion.validation_result > aggregateResult) {
                aggregateResult = curQuestion.validation_result; // xyzzy Note this code relies on teh int values of the enum
            }
        }

        return aggregateResult;
    }

    next() {
        console.log('Clicked next');

        let aggregateResult: ValidationResult = this.runValidationOnCurrentQuestions();

        // Requested Validation is only asked for up to three times 
        if (aggregateResult === ValidationResult.requested) {
            if (this._applicationStateService.shownRequestedValidation >= 3) {
                aggregateResult = ValidationResult.ok;
            }
            this._applicationStateService.shownRequestedValidation++;
        }

        // If validation should be show update show_validation property in the questions
        if (aggregateResult !== ValidationResult.ok) {
            for (let curQuestion of this.questions) {
                curQuestion.show_validation = true;
            }
        }

        // If validation was ok, then let go to the next page
        if (aggregateResult === ValidationResult.ok) {
            this._applicationStateService.next();
        }
    }

    back() {
        console.log('Clicked back');
        this._applicationStateService.back();
    }

    exit() {
        console.log('Clicked exit');
    }
}

// import { CallbackType } from '../../../app/services/application.state.service';
        // this._applicationStateService.registerObserverCallback(this.sharedModelChanged);

    // sharedModelChanged() {
    //     console.log('callback fired');
    //     this.getQuestionsToRender();
    // ;
