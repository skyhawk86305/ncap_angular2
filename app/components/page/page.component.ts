import { Component,  OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';

import { Question } from  '../../../app/types/question';

import { SharedService } from '../../../app/services/shared.service';

import { NgSwitchQuestionComponent } from '../ngSwitchQuestion/ngSwitchQuestion.component';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'page',
    templateUrl: 'app/components/page/page.html',
    //,  styleUrls: ['app/example/dashboard.component.css']
    directives: [NgSwitchQuestionComponent, HomeComponent]
})
export class PageComponent implements OnInit {

    questions: Question[];
    renderButtons: boolean = true;

    pageId: number = 1;

    constructor(
        private _router: Router,
        private _sharedService: SharedService,
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        // Is a pageID in the URL?
        let requestedPageId = +this._routeParams.get('pageId');
        if (requestedPageId) {
            this.pageId = requestedPageId;
        }

        this.getQuestionsToRender();
    }

    getQuestionsToRender() {
        // filter the quesions to the page we are concerned with
        this.questions = this._sharedService.getQuestionsForPage(this.pageId);
        console.log('qu count is ' + this.questions.length);
    }

    next() {
        console.log('Clicked next');
        this.pageId++;
        this.getQuestionsToRender();
    }

    back() {
        console.log('Clicked back');
        this.pageId--;
        this.getQuestionsToRender();
    }

    exit() {
        console.log('Clicked exit');
    }
}
