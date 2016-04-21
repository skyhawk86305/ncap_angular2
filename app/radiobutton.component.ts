import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { QuestionService} from './question.service';
import { Question } from './question';

@Component({
  selector: 'radio-buttons',
  templateUrl: 'app/radioButtons.html'
  //,  styleUrls: ['app/example/dashboard.component.css']
})
export class RadioButtonComponent implements OnInit {

  questions: Question[];
  xyzzy:string;

  constructor(
    private _router: Router
    , private _questionService: QuestionService
  ) {
  }

  ngOnInit() {
    this._questionService.getQuestions()
      .then(questions => this.questions = questions.slice(1,3));
      
      this.xyzzy = "plugh";
      
      // this.question = new Question();
      // this.question.pageId = 44;
      // this.question.question_text = "sdfsdfsdf";
      //this.question.page_id
  }

  // gotoDetail(hero: Hero) {
  //   let link = ['HeroDetail', { id: hero.id }];
  //   this._router.navigate(link);
  //}
}
