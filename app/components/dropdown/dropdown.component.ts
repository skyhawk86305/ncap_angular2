import { Component, Input, OnInit } from 'angular2/core';
import { ComponentHelperClass } from  '../component-helper-class';
import { DomainOption } from   '../../../app/types/database-data/new/domain-option';
import { Question } from       '../../../app/types/question';
import { LoadDomainOptionsSingleton } from '../../../app/vanilla-singletons/load-domain-options.singleton';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../app/vanilla-singletons/navigation.singleton';
import { UserInput } from  '../../../app/types/user-input';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'dropdown',
  templateUrl: 'app/components/dropdown/dropdown.html',
  directives: [TooltipComponent]
})
export class DropdownComponent implements OnInit {

  @Input() question: Question;
  public NavigationSingleton = NavigationSingleton;
  domainOptions: DomainOption[];
  previouslySelectedStoredValue: string;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  ngOnInit() {
    ComponentHelperClass.addTooltipIfNecessary(this.question);
    this._syncToPreviouslyEnteredData();
  }

  modelChange(trackingKey: string, value: string) {
    // console.log('Clicked ' + trackingKey);
    // console.log('Value: >' + value + '<');
    UserInputSingleton.instanceOf().setUserInput(trackingKey, value);
    this._syncToPreviouslyEnteredData();

    // Ask Page Control to re-validate for everything on the page
    NavigationSingleton.instanceOf().requestPageControlRevalidate();
  }

  private _getDomainOptions(id: number, addPleaseSelect: boolean): DomainOption[] {
    let result = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id);

    if (addPleaseSelect) {
      // Copy the array as we are going to modify it
      result = result.slice(0);
      // Add 'Please select' as the first option
      let pleaseSelecteDomainOption: DomainOption = new DomainOption(-1, -1, '---Please select---');
      result.unshift(pleaseSelecteDomainOption);
    }

    return result;
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = UserInputSingleton.instanceOf().getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = previousUserInput.storedValue;
      this.domainOptions = this._getDomainOptions(this.question.parent_sre_dona_id, false);
    } else {
      this.domainOptions = this._getDomainOptions(this.question.parent_sre_dona_id, true);
    }
  }

}
