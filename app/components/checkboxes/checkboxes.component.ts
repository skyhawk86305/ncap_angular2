import { Component, Input, OnInit } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { QuestionNew } from       '../../../app/types/question-new';
import { TooltipComponent } from '../tooltip/tooltip.component';

import { LoadJsonDataService } from '../../../app/services/load-json-data.service';
import { ApplicationStateService } from '../../../app/services/application-state.service';
import { UserInputService } from '../../../app/services/user-input.service';
import { LoadDomainOptionsService } from '../../../app/services/load-domain-options.service';

import { UserInput } from  '../../../app/types/user-input';

import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { AnswerCategory } from '../../../app/types/enums/answer-category';

@Component({
  selector: 'checkboxes',
  templateUrl: 'app/components/checkboxes/checkboxes.html',
  directives: [TooltipComponent]
})
export class CheckboxesComponent implements OnInit {

  @Input() question: QuestionNew;
  domainOptions: DomainOption[];
  previouslySelectedStoredValue: number[] = new Array<number>();

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  constructor(
    protected _applicationStateService: ApplicationStateService,
    private _loadDomainOptionsService: LoadDomainOptionsService,
    private _loadJsonDataService: LoadJsonDataService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    this.domainOptions = this._loadDomainOptionsService.getDomainOptions(this.question.parent_sre_dona_id);

    let mode: boolean = this.question.sre_anca_id === AnswerCategory.Checkboxes_TextboxLastEntry;
    if (mode) {
      console.log('Checkboxes_TextboxLastEntry');
    }

    this._syncToPreviouslyEnteredData();
  }

  // Called from html. Uesd to toggle chceckboxes
  toggleStoredValue(trackingKey: string, id: number) {
    id = +id; // Cover possiblity a string came from html

    // Add/Remove the clicked id fromTo/From array
    if (this.previouslySelectedStoredValue.indexOf(+id) > -1) {
      this.previouslySelectedStoredValue = this.previouslySelectedStoredValue.filter((i) => i !== id);
    } else {
      this.previouslySelectedStoredValue.push(+id);
    }

    // Store selected values in UserInputService
    let arrayAsString: string = this.previouslySelectedStoredValue.join(',');
    this._userInputService.setUserInput(trackingKey, arrayAsString);
    this._syncToPreviouslyEnteredData();

    // Ask Page Control to re-validate for everything on the page
    this._applicationStateService.requestPagecontrolRevalidate();
  }

  // Called from htm. Used to determine is a checkbox is selected
  isSelected(id: number): boolean {
    id = +id; // Cover possiblity a string came from html

    let result: boolean = this.previouslySelectedStoredValue.indexOf(id) > -1;
    return result;
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = this._userInputService.getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      // Split the string into an array
      let splitArray: string[] = previousUserInput.storedValue.split(',');
      // Convert the array of stirngs into an array of numbers
      this.previouslySelectedStoredValue = splitArray.map((i) => { return +i; });
    }
  }

}
