import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Question } from  '../../../app/types/question';

import { LoadJsonDataService } from '../../../app/services/load.json.data.service';

import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'page',
    templateUrl: 'app/components/all-pages/all-pages.html',
    directives: [NgSwitchQuestionComponent, HomeComponent]
})
export class AllPagesComponent implements OnInit {

    //   @Input() question: Question;
    questions: Question[];
    renderButtons: boolean = true;

    constructor(
        private _router: Router,
        private _loadJsonDataService: LoadJsonDataService
    ) {
    }

    ngOnInit() {
        this.questions = this._loadJsonDataService.getQuestions();
    }
}
