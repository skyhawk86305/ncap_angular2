import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { DomainOption } from   '../../../app/types/domain-option';
import { DomainOptions } from  '../../../app/types/domain-options';
import { Question } from       '../../../app/types/question';

import { SharedService } from '../../../app/services/shared.service';

@Component({
  selector: 'radio-buttons',
  templateUrl: 'app/components/radiobutton/radioButtons.html'
  //,  styleUrls: ['app/example/dashboard.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Input() question: Question;
  options: DomainOption[];

  constructor(
    private _router: Router,
    private _sharedService: SharedService
  ) {
  }

  ngOnInit() {
    let domainOptions: DomainOptions = this._sharedService.getDomainOptions();
    this.options = domainOptions.getDomainOption(this.question.answer_lookup);
  }

}
