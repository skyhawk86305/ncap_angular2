import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { QuestionService} from '../../seedData/question.service';
import { Question } from '../../seedData/question';

@Component({
    selector: 'page',
    templateUrl: 'app/components/page/page.html'
    //,  styleUrls: ['app/example/dashboard.component.css']
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

    // gotoDetail(hero: Hero) {
    //   let link = ['HeroDetail', { id: hero.id }];
    //   this._router.navigate(link);
    //}
}
