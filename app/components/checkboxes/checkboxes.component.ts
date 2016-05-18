import { Component, Input, OnInit } from 'angular2/core';
import { ComponentHelperClass } from  '../component-helper-class';
import { DomainOption } from   '../../../app/types/domain-option';
import { PageQuestion } from '../../../app/types/database-data/page-question';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../app/vanilla-singletons/navigation.singleton';
import { LoadDomainOptionsSingleton } from '../../../app/vanilla-singletons/load-domain-options.singleton';
import { UserInput } from  '../../../app/types/user-input';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { AnswerCategory } from '../../../app/types/enums/answer-category.enum';

@Component({
  selector: 'checkboxes',
  templateUrl: 'app/components/checkboxes/checkboxes.html',
  directives: [TooltipComponent]
})
export class CheckboxesComponent implements OnInit {

  @Input() question: PageQuestion;
  public NavigationSingleton = NavigationSingleton;
  domainOptions: DomainOption[];
  showOtherTextBoxForStoredValue: number = -1;
  ValidationResult = ValidationResult; // Permit html to use the enumeration type

  userInputOther: string;
  private _userInputCheckedBoxes: number[] = new Array<number>();

  ngOnInit() {
    this.domainOptions = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id);

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
    NavigationSingleton.instanceOf().requestPageControlRevalidate();
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
    NavigationSingleton.instanceOf().requestPageControlRevalidate();
  }

  private _loadUserInput() {
    // Is there previous entered User Input we need to load
    let userInput: UserInput = UserInputSingleton.instanceOf().getUserInput(this.question.tracking_key);
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

    // Store selected values in UserInputSingleton
    if (this.userInputOther) {
      arrayOfUserInput.push('other:');
      arrayOfUserInput.push(this.userInputOther);
    }

    // Save using the User Input Service
    UserInputSingleton.instanceOf().setUserInput(this.question.tracking_key, arrayOfUserInput.join(','));
  }

}
