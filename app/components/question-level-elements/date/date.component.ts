import { Component, Input } from 'angular2/core';
import { ComponentHelperClass } from  '../../component-helper-class';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { UserInput } from  '../../../../app/types/user-input';
import { ValidationResult } from '../../../../app/types/enums/validation-result.enum';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
  selector: 'date',
  templateUrl: 'app/components/question-level-elements/date/date.html'
})
export class DateComponent {

  @Input() question: PageQuestion;
  public NavigationSingleton = NavigationSingleton; // Permit html to access Singleton
  previouslySelectedStoredValue: string;
  ValidationResult = ValidationResult; // Permit view to use the enumeration type

  ngOnInit() {
    //ComponentHelperClass.addTooltipIfNecessary(this.question);

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
