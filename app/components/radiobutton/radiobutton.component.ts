import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { QuestionService} from '../../../app/services/question.service';
import { Question } from       '../../../app/types/question';

import { DomainOption } from   '../../../app/types/domainOption';
import { DomainOptions } from  '../../../app/types//domainOptions';

@Component({
  selector: 'radio-buttons',
  templateUrl: 'app/components/radiobutton/radioButtons.html'
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
    //, private _questionService: QuestionService
  ) {
  }

  ngOnInit() {
    // this.questions = this._questionService.getQuestions();
    // this.question = this.questions[2];

    let domainOptions = new DomainOptions(); //xyzzy - move to a singleton

    switch (this.question.answer_lookup) {
      case "DOM_ETHNICITY":
        this.options = domainOptions.ethnicity;
        break;
      case "DOM_VERBAL_SKILL":
        this.options = domainOptions.verbalSkill;
        break;
      case "DOM_YES_NO":
        this.options = domainOptions.yesNo;
        break;
      case "DOM_SEX":
        this.options = domainOptions.sex;
        break;
      case "DOM_YES_NO_DK_PNTA":
        this.options = domainOptions.yesNoDkPnta;
        break;
      case "DOM_YES_NO_DK_NA_Q_1":
        this.options = domainOptions.yesNoDkNaQ1;
        break;
      case "DOM_EDU_LEVEL":
        this.options = domainOptions.eduLevel;
        break;
      case "DOM_AGE_5":
        this.options = domainOptions.age5;
        break;
      case "DOM_FREQ_2":
        this.options = domainOptions.freq2;
        break;
      default:
        debugger;
        //xyzzy log + throw exception?
        break;
    }

  }

  // gotoDetail(hero: Hero) {
  //   let link = ['HeroDetail', { id: hero.id }];
  //   this._router.navigate(link);
  //}
}
