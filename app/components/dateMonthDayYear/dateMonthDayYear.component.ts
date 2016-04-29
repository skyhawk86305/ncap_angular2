import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { DomainOption } from   '../../../app/types/domain-option';
import { DomainOptions } from  '../../../app/types/domain-options';
import { Question } from       '../../../app/types/question';

import { LoadJsonDataService } from '../../../app/services/load.json.data.service';

@Component({
  selector: 'date-month-day-year',
  templateUrl: 'app/components/dateMonthDayYear/dateMonthDayYear.html'
})
export class DayMonthYearComponent implements OnInit {

  @Input() question: Question;
  options: DomainOption[];

  constructor(
    private _router: Router,
    private _loadJsonDataService: LoadJsonDataService
  ) {
  }

  ngOnInit() {
    //let domainOptions: DomainOptions = this._loadJsonDataService.getDomainOptions();
    //this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    //xyzzy Temporarily remove all references to tooltip
    //this.question.question_text = this.question.question_text.replace(/<tooltip.*>/i, '');

    //xyzzy WIP - convert tooltip tags to **TT
    this.question.question_text = this.question.question_text.replace(/<tooltip.*="/i, '**TT');
    this.question.question_text = this.question.question_text.replace(/".>/i, '');


    //<tooltip id="7"/>

  }

}
