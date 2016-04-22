import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { QuestionService} from '../../../app/services/question.service';
import { Question } from       '../../../app/types/question';

import { DomainOption } from   '../../../app/types/domainOption';
import { DomainOptions } from  '../../../app/types//domainOptions';

import { SharedService } from '../../../app/services/shared.service';

@Component({
  selector: 'radio-buttons',
  templateUrl: 'app/components/radiobutton/radioButtons.html'
  //,  styleUrls: ['app/example/dashboard.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Input() question: Question;
  questions: Question[];
  options: DomainOption[];

  constructor(
    private _router: Router,
    private _questionService: QuestionService,
    private _sharedService: SharedService
  ) {
  }

  ngOnInit() {
    let domainOptions: DomainOptions = this._sharedService.getDomainOptions();
    this.options = domainOptions.getDomainOption(this.question.answer_lookup);
  }

}
