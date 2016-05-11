import { Component, OnInit } from 'angular2/core';

//import { Question } from  '../../../app/types/question';
import { Question } from  '../../../app/types/question';
import { AnswerCategory } from '../../../app/types/enums/answer-category.enum';

import { SeedDataService } from '../../../app/services/seed-data.service';

import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { HomeComponent } from '../home/home.component';


@Component({
    selector: 'page',
    templateUrl: 'app/components/all-pages/all-pages.html',
    directives: [NgSwitchQuestionComponent, HomeComponent]
})
export class AllPagesComponent implements OnInit {

    questions: Question[];
    renderButtons: boolean = true;

    constructor(
        private _loadJsonDataService: SeedDataService
    ) {
    }

    ngOnInit() {
        this.questions = this._loadJsonDataService.getAllQuestions();
    }
}
