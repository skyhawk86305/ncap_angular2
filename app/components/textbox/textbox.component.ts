import { Component, Input, OnInit } from 'angular2/core';
import { ComponentHelperClass } from  '../component-helper-class';
import { Question } from       '../../../app/types/question';
import { ApplicationControllerService } from '../../../app/services/application-controller.service';
import { NavigationSingleton } from '../../../app/services/vanilla-singleton/navigation.singleton';
import { UserInputSingleton } from '../../../app/services/vanilla-singleton/user-input.singleton';
import { UserInput } from  '../../../app/types/user-input';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'textbox',
  templateUrl: 'app/components/textbox/textbox.html',
  directives: [TooltipComponent]
})
export class TextboxComponent implements OnInit {

  @Input() question: Question;
  public NavigationSingleton = NavigationSingleton;
  previouslySelectedStoredValue: string;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  constructor(
    private _applicationStateService: ApplicationControllerService
  ) {
  }

  ngOnInit() {
    ComponentHelperClass.addTooltipIfNecessary(this.question);
    this._syncToPreviouslyEnteredData();
  }

  modelChange(trackingKey: string, value: string) {
    // console.log('Clicked ' + trackingKey);
    // console.log('Value: ' + value);
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
