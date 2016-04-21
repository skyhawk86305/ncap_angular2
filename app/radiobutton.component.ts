import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { QuestionService} from './question.service';
import { Question } from './question';

import { DomainOption } from './domainOption';
import { DOMAGE5 } from './mock-domAge5'

@Component({
  selector: 'radio-buttons',
  templateUrl: 'app/radioButtons.html'
  //,  styleUrls: ['app/example/dashboard.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Input() question: Question;
  //qu: Question;
  questions: Question[];
  options: DomainOption[];

  constructor(
    private _router: Router
    , private _questionService: QuestionService
  ) {
  }

  ngOnInit() {
    this.questions = this._questionService.getQuestions();
    this.question = this.questions[0];
    this.options = DOMAGE5;
  }

  // gotoDetail(hero: Hero) {
  //   let link = ['HeroDetail', { id: hero.id }];
  //   this._router.navigate(link);
  //}
}
