import { Component, Input, OnInit } from 'angular2/core';
import { Domain } from   '../../../../app/types/database-data/domain';
import { SubuQuestion } from '../../../../app/types/database-data/subu-question';
import { RenderHtmlStringIncludingTooltipsComponent } from '../../other/html-including-tooltips/html-including-tooltips.component';
import { LoadDomainOptionsSingleton } from '../../../../app/vanilla-singletons/load-domain-options.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { UserInput } from  '../../../../app/types/database-data/user-input';
import { AnswerCategory } from  '../../../../app/types/enums/answer-category.enum';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
  selector: 'matrix-row',
  templateUrl: 'app/components/question-level-elements/matrix-row/matrix-row.html',
  styleUrls: ['app/components/question-level-elements/matrix/matrix.css'],
  directives: [RenderHtmlStringIncludingTooltipsComponent]
})
export class MatrixRowComponent implements OnInit {

  @Input('question') question: PageQuestion;
  @Input('element') subuElement: SubuQuestion;
  protected userInputSingleton = UserInputSingleton.instanceOf();
  AnswerCategory = AnswerCategory; // Permit view to use the enumeration type
  domainOptions: Domain[] = new Array<Domain>();
  previouslySelectedRadioButton: number;
  textInput: string;
  domainOptionsForLastColDropDown: Domain[];

  ngOnInit() {
    if (this.subuElement.sre_anca_id !== AnswerCategory.Textbox_in_Matrix) {
      // Note: non-hash lookup, but there are only ~<20 rows
      this.domainOptions = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id);
    }

    if (this.subuElement.sre_anca_id === AnswerCategory.RadioButtons_in_Matrix_DropDownLastCol) {
      this.domainOptions = this.domainOptions.slice(); // make a copy of the array
      this.domainOptions.pop(); // remove the final item as we put a drop down below the question text
    }

    this._syncToPreviouslyEnteredData();
  }

  radioButtonClick(trackingKey: string, id: number) {
    // console.log('Clicked ' + trackingKey + ' with value ' + id);
    UserInputSingleton.instanceOf().setUserInput(trackingKey, id.toString());
  }

  textChanged(trackingKey: string) {
    // console.log('Changed ' + trackingKey + ' with value ' + this.textInput);
    UserInputSingleton.instanceOf().setUserInput(trackingKey, this.textInput);
  }

  dropDownChanged(trackingKey: string, value: string) {
    trackingKey += '_noticed';
    // console.log('Clicked ' + trackingKey + ' with value ' + trackingKey);
    if (+value > -1) {
      UserInputSingleton.instanceOf().setUserInput(trackingKey, value);
    }
  }

  // plugh Copy and Paste code - move to a shared class
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
    let previousUserInput: UserInput = UserInputSingleton.instanceOf().getUserInput(this.subuElement.tracking_key);

    if (previousUserInput) {
      switch (this.subuElement.sre_anca_id) {
        case AnswerCategory.RadioButtons_in_Matrix:
          this.previouslySelectedRadioButton = +previousUserInput.storedValue;
          break;
        case AnswerCategory.Textbox_in_Matrix:
          this.textInput = previousUserInput.storedValue;
          break;
        case AnswerCategory.RadioButtons_in_Matrix_DropDownLastCol:
          this.previouslySelectedRadioButton = +previousUserInput.storedValue;
          break;
        default:
          let message = 'Not yet supported :' + AnswerCategory[this.subuElement.sre_anca_id];
          console.log(message);
          throw new Error(message);
      }
    }

    // And the associated drop down (if there is one)
    previousUserInput = UserInputSingleton.instanceOf().getUserInput(this.subuElement.tracking_key + '_noticed');
    if (previousUserInput) {
      this.subuElement.previouslySelectedStoredValue = +previousUserInput.storedValue;
      this.domainOptionsForLastColDropDown = this._getDomainOptions(1, false);

    } else {
      this.subuElement.previouslySelectedStoredValue = -1;
      this.domainOptionsForLastColDropDown = this._getDomainOptions(1, true);
    }

  }
}
