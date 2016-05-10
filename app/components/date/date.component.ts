import { Component, Input } from 'angular2/core';
import { QuestionNew } from       '../../../app/types/question-new';
import { ApplicationStateService } from '../../../app/services/application-state.service';
import { UserInputService } from '../../../app/services/user-input.service';
import { UserInput } from  '../../../app/types/user-input';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

@Component({
  selector: 'date',
  templateUrl: 'app/components/date/date.html'
})
export class DateComponent {

  @Input() question: QuestionNew;
  previouslySelectedStoredValue: string;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  constructor(
    private _applicationStateService: ApplicationStateService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    this._syncToPreviouslyEnteredData();

    // if (!this.previouslySelectedStoredValue) {
    //   this.previouslySelectedStoredValue = '2016-04-05'; //xyzzy5 default as Db logic dictates
    // }

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

  modelChange(trackingKey: string, value: string) {
    // console.log('Clicked ' + trackingKey);
    // console.log('Value: ' + value);
    this._userInputService.setUserInput(trackingKey, value);
    this._syncToPreviouslyEnteredData();

    // Ask Page Control to re-validate for everything on the page
    this._applicationStateService.requestPageControlRevalidate();
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = this._userInputService.getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = previousUserInput.storedValue;
    }
  }

}
