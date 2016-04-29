import { Component, Input } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { Question } from       '../../../app/types/question';

import { UserInputService } from '../../../app/services/user.input.service';

@Component({
  selector: 'date-month-day-year',
  templateUrl: 'app/components/dateMonthDayYear/dateMonthDayYear.html'
})
export class DayMonthYearComponent {

  @Input() question: Question;
  options: DomainOption[];

  constructor(
    private _userInputService: UserInputService
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

// xyzzy Hack to pas validation until this control is built out
    this._userInputService.setUserInput(this.question.tracking_key, 'xyzzy');

    //<tooltip id="7"/>

  }

}
