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
  selector: '[matrixElement]',
  templateUrl: 'app/components/question-level-elements/matrix-row/matrix-row.html',
  directives: [RenderHtmlStringIncludingTooltipsComponent]

})
export class MatrixRowComponent implements OnInit {

  @Input() matrixElement: SubuQuestion;
  @Input('question') question: PageQuestion;
  domainOptions: Domain[] = new Array<Domain>();
  previouslySelectedRadioButton: number;
  textInput: string;

  // Permit view to use the enumeration type
  AnswerCategory = AnswerCategory;

  ngOnInit() {
    this.syncToPreviouslyEnteredData();

    // xyzzy - this will be called many times asking for the same value, so we need to use a hash lookup
    //console.log('get domain for ' + AnswerCategory[this.matrixElement.answer_category]);
    //if (this.matrixElement.answer_category !== AnswerCategory.Textbox_in_Matrix) {
      this.domainOptions = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id);
    //}
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
    let previousUserInput: UserInput = UserInputSingleton.instanceOf().getUserInput(this.matrixElement.tracking_key);

    if (previousUserInput) {
      switch (this.matrixElement.sre_anca_id) {
        case AnswerCategory.RadioButons_in_Matrix:
          this.previouslySelectedRadioButton = +previousUserInput.storedValue;
          break;
        case AnswerCategory.Textbox_in_Matrix:
          this.textInput = previousUserInput.storedValue;
          break;
        default:
          let message = 'Not yet supported :' + this.matrixElement.sre_anca_id;
          console.log(message);
          throw new Error(message);
      }
    }
  }

}
