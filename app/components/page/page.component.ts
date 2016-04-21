import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { QuestionService} from '../../seedData/question.service';
import { Question } from '../../seedData/question';

import { NgSwitchQuestionComponent } from '../ngSwitchQuestion/ngSwitchQuestion.component';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'page',
    templateUrl: 'app/components/page/page.html',
    //,  styleUrls: ['app/example/dashboard.component.css']
    directives: [NgSwitchQuestionComponent, HomeComponent]
})
export class PageComponent implements OnInit {

    //   @Input() question: Question;
    questions: Question[];
    renderButtons: boolean = true;

    constructor(
        private _router: Router
        , private _questionService: QuestionService
    ) {
    }

    ngOnInit() {
        this.questions = this._questionService.getQuestions();
        console.log("qu count is " + this.questions.length);
    }

    next() {
        console.log('Clicked next');
    }

    back() {
        console.log('Clicked back');
    }

    exit() {
        console.log('Clicked exit');
    }
}
