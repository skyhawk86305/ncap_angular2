import { Component, Input, OnInit } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { UserInput } from  '../../../../app/types/database-data/user-input';
import { ValidationResult } from '../../../../app/types/enums/validation-result.enum';
import { RenderHtmlStringIncludingTooltipsComponent } from '../../other/html-including-tooltips/html-including-tooltips.component';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
  selector: 'textbox',
  templateUrl: 'app/components/question-level-elements/textbox/textbox.html',
  directives: [RenderHtmlStringIncludingTooltipsComponent]
})
export class TextboxComponent implements OnInit {

  @Input() question: PageQuestion;
  protected navigationSingleton = NavigationSingleton.instanceOf();
  public ValidationResult = ValidationResult; // Permit view to use the enumeration type
  previouslySelectedStoredValue: string;

  ngOnInit() {
    this._syncToPreviouslyEnteredData();
  }

  modelChange(trackingKey: string, value: string) {
    // console.log('Clicked ' + trackingKey);
    // console.log('Value: ' + value);
    UserInputSingleton.instanceOf().setUserInput(trackingKey, value);
    this._syncToPreviouslyEnteredData();

    // Ask Page Control to re-validate for everything on the page
    NavigationSingleton.instanceOf().validateEntirePage();
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = UserInputSingleton.instanceOf().getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = previousUserInput.storedValue;
    }
  }

}
