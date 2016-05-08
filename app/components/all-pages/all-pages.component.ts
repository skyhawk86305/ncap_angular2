import { Component, OnInit } from 'angular2/core';

//import { Question } from  '../../../app/types/question';
import { QuestionNew } from  '../../../app/types/question-new';
import { AnswerCategory } from '../../../app/types/enums/answer-category';

import { LoadJsonDataService } from '../../../app/services/load-json-data.service';

import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { HomeComponent } from '../home/home.component';


@Component({
    selector: 'page',
    templateUrl: 'app/components/all-pages/all-pages.html',
    directives: [NgSwitchQuestionComponent, HomeComponent]
})
export class AllPagesComponent implements OnInit {

    questions: QuestionNew[];
    renderButtons: boolean = true;

    constructor(
        private _loadJsonDataService: LoadJsonDataService
    ) {
    }

    ngOnInit() {
        this.questions = this._loadJsonDataService.getAllQuestions();
    }
}
