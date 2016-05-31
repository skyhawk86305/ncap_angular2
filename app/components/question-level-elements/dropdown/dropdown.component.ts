import { Component, Input, OnInit } from 'angular2/core';
import { Domain } from   '../../../../app/types/database-data/domain';
import { LoadDomainOptionsSingleton } from '../../../../app/vanilla-singletons/load-domain-options.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { UserInput } from  '../../../../app/types/database-data/user-input';
import { ValidationResult } from '../../../../app/types/enums/validation-result.enum';
import { RenderHtmlStringIncludingTooltipsComponent } from '../../other/html-including-tooltips/html-including-tooltips.component';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
  selector: 'dropdown',
  templateUrl: 'app/components/question-level-elements/dropdown/dropdown.html',
  directives: [RenderHtmlStringIncludingTooltipsComponent]
})
export class DropdownComponent implements OnInit {

  @Input() question: PageQuestion;
  protected navigationSingleton = NavigationSingleton.instanceOf();
  public ValidationResult = ValidationResult; // Permit view to use the enumeration type
  domainOptions: Domain[];
  previouslySelectedStoredValue: string;

  ngOnInit() {
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

  private _getDomainOptions(id: number, addPleaseSelect: boolean): Domain[] {
    let result = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(id);

    if (addPleaseSelect) {
      // Copy the array as we are going to modify it
      result = result.slice(0);
      // Add 'Please select' as the first option
      let pleaseSelecteDomainOption: Domain = new Domain(-1, -1, '---Please select---');
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
