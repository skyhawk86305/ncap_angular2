import { Component, Input, OnInit } from 'angular2/core';
import { ComponentHelperClass } from  '../component-helper-class';
import { DomainOption } from   '../../../app/types/domain-option';
import { Question } from       '../../../app/types/question';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { LoadDomainOptionsSingleton } from '../../../app/vanilla-singletons/load-domain-options.singleton';
import { NavigationSingleton } from '../../../app/vanilla-singletons/navigation.singleton';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { UserInput } from  '../../../app/types/user-input';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

@Component({
  selector: 'radio-buttons',
  templateUrl: 'app/components/radiobutton/radioButtons.html',
  directives: [TooltipComponent]

})
export class RadioButtonComponent implements OnInit {

  @Input() question: Question;
  public NavigationSingleton = NavigationSingleton;

  domainOptions: DomainOption[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: number;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  ngOnInit() {
    this.domainOptions = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id);

    ComponentHelperClass.addTooltipIfNecessary(this.question);

    this._syncToPreviouslyEnteredData();
  }

  click(trackingKey: string, id: number) {
    //console.log('Clicked ' + trackingKey + ' with id ' + id);
    UserInputSingleton.instanceOf().setUserInput(trackingKey, id.toString());
    this._syncToPreviouslyEnteredData();

    // Ask Page Control to re-validate for everything on the page
    NavigationSingleton.instanceOf().requestPageControlRevalidate();
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = UserInputSingleton.instanceOf().getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = +previousUserInput.storedValue;
    }
  }

}
