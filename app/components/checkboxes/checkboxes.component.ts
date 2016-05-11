import { Component, Input, OnInit } from 'angular2/core';

import { ComponentHelperClass } from  '../component-helper-class';

import { DomainOption } from   '../../../app/types/domain-option';
import { Question } from       '../../../app/types/question';
import { TooltipComponent } from '../tooltip/tooltip.component';

import { ApplicationStateService } from '../../../app/services/application-state.service';
import { UserInputService } from '../../../app/services/user-input.service';
import { LoadDomainOptionsService } from '../../../app/services/load-domain-options.service';

import { UserInput } from  '../../../app/types/user-input';

import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { AnswerCategory } from '../../../app/types/enums/answer-category.enum';

@Component({
  selector: 'checkboxes',
  templateUrl: 'app/components/checkboxes/checkboxes.html',
  directives: [TooltipComponent]
})
export class CheckboxesComponent implements OnInit {

  @Input() question: Question;
  domainOptions: DomainOption[];
  showOtherTextBoxForStoredValue: number = -1;
  ValidationResult = ValidationResult; // Permit html to use the enumeration type

  userInputOther: string;
  private _userInputCheckedBoxes: number[] = new Array<number>();

  constructor(
    protected _applicationStateService: ApplicationStateService,
    private _loadDomainOptionsService: LoadDomainOptionsService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    this.domainOptions = this._loadDomainOptionsService.getDomainOptions(this.question.parent_sre_dona_id);

    ComponentHelperClass.addTooltipIfNecessary(this.question);

    if (this.question.sre_anca_id === AnswerCategory.Checkboxes_TextboxLastEntry) {
      this.showOtherTextBoxForStoredValue = 4; // xyzzy Hardcoded the value for Other
    }

    this._loadUserInput();
  }

  // Called from html
  toggleCheckbox(id: number) {
    id = +id; // Cover possiblity a string came from html

    // Add/Remove the clicked id To/From array
    if (this._userInputCheckedBoxes.indexOf(+id) > -1) {
      // Remove from Array
      this._userInputCheckedBoxes = this._userInputCheckedBoxes.filter((i) => i !== id);
    } else {
      // Add to Array
      this._userInputCheckedBoxes.push(+id);
    }

    this._saveUserInput();
    this._loadUserInput();

    // Ask Page Control to re-validate for everything on the page
    this._applicationStateService.requestPageControlRevalidate();
  }

  // Called from html
  isCheckboxSelected(id: number): boolean {
    id = +id; // Cover possiblity a string came from html

    let result: boolean = this._userInputCheckedBoxes.indexOf(id) > -1;
    return result;
  }

  // Called from html
  otherChanged(value: string) {
    this.userInputOther = value;
    this._saveUserInput();
    this._loadUserInput();

    // Ask Page Control to re-validate for everything on the page
    this._applicationStateService.requestPageControlRevalidate();
  }

  private _loadUserInput() {
    // Is there previous entered User Input we need to load
    let userInput: UserInput = this._userInputService.getUserInput(this.question.tracking_key);
    if (userInput) {
      let serializedUserInput = userInput.storedValue;
      // Split the string into an array
      let splitArray: string[] = serializedUserInput.split(',');

      if (splitArray.find((i) => i === 'other:')) {
        this.userInputOther = splitArray.pop(); // Other value will be the last item in the array
        splitArray.pop(); // discare the element for 'other:'
      }

      // Convert the array of stirngs into an array of numbers
      this._userInputCheckedBoxes = splitArray.map((i) => { return +i; });
    }
  }

  private _saveUserInput() {
    let arrayOfUserInput: string[] = this._userInputCheckedBoxes.map((i) => { return i.toString(); }); // Convert to an array of strings

    // Store selected values in UserInputService
    if (this.userInputOther) {
      arrayOfUserInput.push('other:');
      arrayOfUserInput.push(this.userInputOther);
    }

    // Save using the User Input Service
    this._userInputService.setUserInput(this.question.tracking_key, arrayOfUserInput.join(','));
  }

}
