import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

import { Question } from  '../../../app/types/question';

import { SharedService } from '../../../app/services/shared.service';

import { NgSwitchQuestionComponent } from '../ngSwitchQuestion/ngSwitchQuestion.component';
import { HomeComponent } from '../home/home.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { DiagnosticComponent } from '../diagnostic/diagnostic.component';
import { ApplicationStateService } from '../../../app/services/application.state.service';


@Component({
    selector: 'page',
    templateUrl: 'app/components/page/page.html',
    //,  styleUrls: ['app/example/dashboard.component.css']
    directives: [NgSwitchQuestionComponent, HomeComponent, TooltipComponent, DiagnosticComponent]
})
export class PageComponent implements OnInit {

    questions: Question[];
    renderButtons: boolean = true;

    constructor(
        private _router: Router,
        private _applicationStateService: ApplicationStateService,
        private _sharedService: SharedService,
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
    }

    getQuestionsToRender() {
        // filter the quesions to the page we are concerned with
        let pageId = this._applicationStateService.getCurrentPageNumber();
        this.questions = this._sharedService.getQuestionsForPage(pageId);
        console.log('qu count is ' + this.questions.length);
    }

    next() {
        console.log('Clicked next');
        this._applicationStateService.next();
        this.getQuestionsToRender();
    }

    back() {
        console.log('Clicked back');
        this._applicationStateService.back();
        this.getQuestionsToRender();
    }

    exit() {
        console.log('Clicked exit');
    }
}
