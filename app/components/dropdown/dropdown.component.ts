import { Component, Input, OnInit } from 'angular2/core';
import { ComponentHelperClass } from  '../component-helper-class';
import { DomainOption } from   '../../../app/types/domain-option';
import { Question } from       '../../../app/types/question';
import { ApplicationControllerService } from '../../../app/services/application-controller.service';
import { LoadDomainOptionsService } from '../../../app/services/load-domain-options.service';
import { UserInputSingleton } from '../../../app/services/user-input.singleton';
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
  domainOptions: DomainOption[];
  previouslySelectedStoredValue: string;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  constructor(
    private _applicationStateService: ApplicationControllerService,
    private _loadDomainOptionsService: LoadDomainOptionsService
  ) {
  }

  ngOnInit() {
    ComponentHelperClass.addTooltipIfNecessary(this.question);
    this._syncToPreviouslyEnteredData();
  }

  modelChange(trackingKey: string, value: string) {
    // console.log('Clicked ' + trackingKey);
    // console.log('Value: >' + value + '<');
    UserInputSingleton.getInstance().setUserInput(trackingKey, value);
    this._syncToPreviouslyEnteredData();

    // Ask Page Control to re-validate for everything on the page
    this._applicationStateService.requestPageControlRevalidate();
  }

  private _getDomainOptions(id: number, addPleaseSelect: boolean): DomainOption[] {
    let result = this._loadDomainOptionsService.getDomainOptions(this.question.parent_sre_dona_id);

    if (addPleaseSelect) {
      // Copy the array as we are going to modify it
      result = result.slice(0);
      // Add 'Please select' as the first option
      let pleaseSelecteDomainOption: DomainOption = new DomainOption();
      pleaseSelecteDomainOption.displayed_value = '---Please select---';
      pleaseSelecteDomainOption.stored_value = '';
      result.unshift(pleaseSelecteDomainOption);
    }

    return result;
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = UserInputSingleton.getInstance().getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = previousUserInput.storedValue;
      this.domainOptions = this._getDomainOptions(this.question.parent_sre_dona_id, false);
    } else {
      this.domainOptions = this._getDomainOptions(this.question.parent_sre_dona_id, true);
    }
  }

}
