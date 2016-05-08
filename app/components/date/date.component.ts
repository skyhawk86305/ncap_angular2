import { Component, Input } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { QuestionNew } from       '../../../app/types/question-new';

import { UserInputService } from '../../../app/services/user-input.service';
import { UserInput } from  '../../../app/types/user-input';


@Component({
  selector: 'date-month-day-year',
  templateUrl: 'app/components/date/date.html'
})
export class DayMonthYearComponent {

  @Input() question: QuestionNew;
  options: DomainOption[];
  previouslySelectedStoredValue: string;

  constructor(
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    this._syncToPreviouslyEnteredData();


    // xyzzy Hack to pass validation until this control is built out
    //this._userInputService.setUserInput(this.question.tracking_key, 'dummy_data');

    if (!this.previouslySelectedStoredValue) {
      this.previouslySelectedStoredValue = '04/05/2016';
    }

    //let domainOptions: DomainOptions = this._loadJsonDataService.getDomainOptions();
    //this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    // Temporarily remove all references to tooltip
    //this.question.question_text = this.question.question_text.replace(/<tooltip.*>/i, '');

    // Todo WIP - convert tooltip tags to **TT
    // this.question.question_text = this.question.question_text.replace(/<tooltip.*="/i, '**TT');
    this.question.question_text = this.question.question_text.replace('tooltip', '**TT');
    this.question.question_text = this.question.question_text.replace(/".>/i, '');

    this.question.question_text = this.question.question_text.replace('tooltip', '**TT');
    this.question.question_text = this.question.question_text.replace(/".>/i, '');
  }

  // click(trackingKey: string, id: number) {
  //   console.log('Clicked ' + trackingKey + ' with id ' + id);
  //   this._userInputService.setUserInput(trackingKey, id.toString());
  //   this._syncToPreviouslyEnteredData();

  //   // Ask Page Control to re-validate for everything on the page
  //   this._applicationStateService.requestPagecontrolRevalidate();
  // }


  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = this._userInputService.getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = previousUserInput.storedValue;
    }
  }

}
