import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { DomainOption } from   '../../../app/types/domain-option';
import { DomainOptions } from  '../../../app/types/domain-options';
import { Question } from       '../../../app/types/question';

import { SeedDataService } from '../../../app/services/seed.data.service';

@Component({
  selector: 'date-month-day-year',
  templateUrl: 'app/components/dateMonthDayYear/dateMonthDayYear.html'
  //,  styleUrls: ['app/example/dashboard.component.css']
})
export class DayMonthYearComponent implements OnInit {

  @Input() question: Question;
  options: DomainOption[];

  constructor(
    private _router: Router,
    private _seedDataService: SeedDataService
  ) {
  }

  ngOnInit() {
    //let domainOptions: DomainOptions = this._seedDataService.getDomainOptions();
    //this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    //xyzzy Temporarily remove all references to tooltip
    //this.question.question_text = this.question.question_text.replace(/<tooltip.*>/i, '');

    //xyzzy WIP - convert tooltip tags to **TT
    this.question.question_text = this.question.question_text.replace(/<tooltip.*="/i, '**TT');
    this.question.question_text = this.question.question_text.replace(/".>/i, '');


    //<tooltip id="7"/>

  }

}
