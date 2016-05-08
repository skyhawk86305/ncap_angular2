// /// <reference path="../../../typings/main.d.ts" />

import { Component, OnInit } from 'angular2/core';

// import * as prettyjson from 'prettyjson';

import { QuestionNew } from  '../../../app/types/question-new';

import { LoadJsonDataService } from '../../../app/services/load-json-data.service';
import { ApplicationStateService } from '../../../app/services/application-state.service';
import { UserInputService } from '../../../app/services/user-input.service';

import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { HomeComponent } from '../home/home.component';
import { TooltipComponent } from '../tooltip/tooltip.component';

import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'diag',
    templateUrl: 'app/components/diagnostic/diagnostic.html',
    directives: [NgSwitchQuestionComponent, HomeComponent, TooltipComponent]
})
export class DiagnosticComponent implements OnInit {

    questions: QuestionNew[];
    renderButtons: boolean = true;
    userInputMap: UserInput[];
    userInputMapJson: string;

    applicationStateService: ApplicationStateService;

    constructor(
        private _loadJsonDataService: LoadJsonDataService,
        private _applicationStateService: ApplicationStateService,
        private _userInputService: UserInputService
    ) {
    }

    ngOnInit() {
        //        let text = prettyjson.render(this._applicationStateService);
        this.userInputMap = this._userInputService.getAllUserInput();
        this.userInputMapJson = JSON.stringify(this.userInputMap);
        this.applicationStateService = this._applicationStateService;
    }
}

