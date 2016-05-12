import { Component, Input } from 'angular2/core';
import { ComponentHelperClass } from  '../component-helper-class';
import { Question } from       '../../../app/types/question';
import { UserInputSingleton } from '../../../app/services/vanilla-singleton/user-input.singleton';
import { NavigationSingleton } from '../../../app/services/vanilla-singleton/navigation.singleton';
import { UserInput } from  '../../../app/types/user-input';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

@Component({
  selector: 'date',
  templateUrl: 'app/components/date/date.html'
})
export class DateComponent {

  @Input() question: Question;
  previouslySelectedStoredValue: string;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  ngOnInit() {
    ComponentHelperClass.addTooltipIfNecessary(this.question);

    this._syncToPreviouslyEnteredData();
  }

  modelChange(trackingKey: string, value: string) {
    UserInputSingleton.instanceOf().setUserInput(trackingKey, value);
    this._syncToPreviouslyEnteredData();

    // Ask Page Control to re-validate for everything on the page
    NavigationSingleton.instanceOf().requestPageControlRevalidate();
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = UserInputSingleton.instanceOf().getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = previousUserInput.storedValue;
    }
  }

}
