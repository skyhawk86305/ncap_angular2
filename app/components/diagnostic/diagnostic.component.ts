// /// <reference path="../../../typings/main.d.ts" />

import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

//import * as prettyjson from 'prettyjson';

import { Question } from  '../../../app/types/question';

import { SharedService } from '../../../app/services/shared.service';
import { ApplicationStateService } from '../../../app/services/application.state.service';

import { NgSwitchQuestionComponent } from '../ngSwitchQuestion/ngSwitchQuestion.component';
import { HomeComponent } from '../home/home.component';
import { TooltipComponent } from '../tooltip/tooltip.component';

import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'diag',
    templateUrl: 'app/components/diagnostic/diagnostic.html',
    //,  styleUrls: ['app/example/dashboard.component.css']
    directives: [NgSwitchQuestionComponent, HomeComponent, TooltipComponent]
})
export class DiagnosticComponent implements OnInit {

    questions: Question[];
    renderButtons: boolean = true;
    userInputMap: UserInput[];

    pageId: number = 1;

    constructor(
        private _router: Router,
        private _sharedService: SharedService,
        private _applicationStateService: ApplicationStateService,
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        //        let text = prettyjson.render(this._applicationStateService);
        this.userInputMap = this._applicationStateService.getAllUserInput();
    }
}
