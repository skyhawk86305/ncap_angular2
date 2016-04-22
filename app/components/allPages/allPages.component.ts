import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Question } from  '../../../app/types/question';

import { SharedService } from '../../../app/services/shared.service';

import { NgSwitchQuestionComponent } from '../ngSwitchQuestion/ngSwitchQuestion.component';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'page',
    templateUrl: 'app/components/allPages/allPages.html',
    //,  styleUrls: ['app/example/dashboard.component.css']
    directives: [NgSwitchQuestionComponent, HomeComponent]
})
export class AllPagesComponent implements OnInit {

    //   @Input() question: Question;
    questions: Question[];
    renderButtons: boolean = true;

    constructor(
        private _router: Router,
        private _sharedService: SharedService
    ) {
    }

    ngOnInit() {
        this.questions = this._sharedService.getQuestions();
    }
}
