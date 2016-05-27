import { Component, Input, OnInit } from 'angular2/core';
import { Domain } from   '../../../../app/types/database-data/domain';
import { SubuQuestion } from '../../../../app/types/database-data/subu-question';
import { RenderHtmlStringIncludingTooltipsComponent } from '../../other/html-including-tooltips/html-including-tooltips.component';
import { LoadDomainOptionsSingleton } from '../../../../app/vanilla-singletons/load-domain-options.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { UserInput } from  '../../../../app/types/user-input';
import { AnswerCategory } from  '../../../../app/types/enums/answer-category.enum';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
  selector: 'matrix-row-div',
  templateUrl: 'app/components/question-level-elements/matrix-row-div/matrix-row-div.html',
  styleUrls: ['app/components/question-level-elements/matrix/matrix.css'],
  directives: [RenderHtmlStringIncludingTooltipsComponent]
})
export class MatrixRowDivComponent implements OnInit {

  @Input('question') question: PageQuestion;
  @Input('element') subuElement: SubuQuestion;
  domainOptions: Domain[] = new Array<Domain>();
  previouslySelectedRadioButton: number;
  textInput: string;

  // Permit view to use the enumeration type
  AnswerCategory = AnswerCategory;

  ngOnInit() {
    this.syncToPreviouslyEnteredData();

    // xyzzy - this will be called many times asking for the same value, so we need to use a hash lookup
    console.log('get domain for ' + AnswerCategory[this.subuElement.sre_anca_id]);
    if (this.subuElement.sre_anca_id !== AnswerCategory.Textbox_in_Matrix) {
      this.domainOptions = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id).slice();
      if (this.subuElement.sre_anca_id === AnswerCategory.RadioButtons_in_Matrix_DropDownLastCol) {
        // The last column is not needed for RadioButtons_in_Matrix_DropDownLastCol
        this.domainOptions.pop();
      }
    }
  }

  radioButtonClick(trackingKey: string, id: number) {
    console.log('Clicked ' + trackingKey + ' with value ' + id);
    UserInputSingleton.instanceOf().setUserInput(trackingKey, id.toString());
  }

  textChanged(trackingKey: string) {
    console.log('Changed ' + trackingKey + ' with value ' + this.textInput);
    UserInputSingleton.instanceOf().setUserInput(trackingKey, this.textInput);
  }

  private syncToPreviouslyEnteredData() {
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
  }

}
