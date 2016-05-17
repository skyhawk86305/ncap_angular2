import { Component, OnInit } from 'angular2/core';
import { PageQuestion } from '../../../app/types/database-data/page-question';
import { NgSwitchQuestionComponent } from '../ng-switch-question/ng-switch-question.component';
import { HomeComponent } from '../home/home.component';
import { SeedDataSingleton } from '../../../app/vanilla-singletons/seed-data.singleton';

@Component({
    selector: 'page',
    templateUrl: 'app/components/all-pages/all-pages.html',
    directives: [NgSwitchQuestionComponent, HomeComponent]
})
export class AllPagesComponent implements OnInit {

    questions: PageQuestion[];
    renderButtons: boolean = true;

        ngOnInit() {
        this.questions = SeedDataSingleton.instanceOf().getAllQuestions();
    }
}
