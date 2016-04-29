// /// <reference path="../../../typings/main.d.ts" />

import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

// import * as prettyjson from 'prettyjson';

import { Question } from  '../../../app/types/question';

import { SeedDataService } from '../../../app/services/seed.data.service';
import { ApplicationStateService } from '../../../app/services/application.state.service';
import { UserInputService } from '../../../app/services/user.input.service';

import { NgSwitchQuestionComponent } from '../ngSwitchQuestion/ngSwitchQuestion.component';
import { HomeComponent } from '../home/home.component';
import { TooltipComponent } from '../tooltip/tooltip.component';

import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'diag',
    templateUrl: 'app/components/diagnostic/diagnostic.html',
    directives: [NgSwitchQuestionComponent, HomeComponent, TooltipComponent]
})
export class DiagnosticComponent implements OnInit {

    questions: Question[];
    renderButtons: boolean = true;
    userInputMap: UserInput[];
    userInputMapJson: string;

    applicationStateService: ApplicationStateService;

    constructor(
        private _router: Router,
        private _seedDataService: SeedDataService,
        private _applicationStateService: ApplicationStateService,
        private _userInputService: UserInputService,
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        //        let text = prettyjson.render(this._applicationStateService);
        this.userInputMap = this._userInputService.getAllUserInput();
        this.userInputMapJson = JSON.stringify(this.userInputMap);
        this.applicationStateService = this._applicationStateService;
    }
}

