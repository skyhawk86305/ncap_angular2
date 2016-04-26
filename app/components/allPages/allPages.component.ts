import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Question } from  '../../../app/types/question';

import { SeedDataService } from '../../../app/services/seed.data.service';

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
        private _seedDataService: SeedDataService
    ) {
    }

    ngOnInit() {
        this.questions = this._seedDataService.getQuestions();
    }
}
