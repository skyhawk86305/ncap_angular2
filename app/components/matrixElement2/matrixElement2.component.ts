import { Component, Input, OnInit } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { Question } from       '../../../app/types/question';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { MatrixElement } from '../../../app/types/matrix-element';

import { SeedDataService } from '../../../app/services/seed-data.service';
import { LoadDomainOptionsService } from '../../../app/services/load-domain-options.service';
import { ApplicationControllerService } from '../../../app/services/application-controller.service';
import { UserInputSingleton } from '../../../app/services/vanilla-singleton/user-input.singleton';

import { UserInput } from  '../../../app/types/user-input';
import { AnswerCategory } from  '../../../app/types/enums/answer-category.enum';

@Component({
  selector: '[matrixElement2]',
  templateUrl: 'app/components/matrixElement2/matrixElement2.html',
  directives: [TooltipComponent]

})
export class MatrixElement2Component implements OnInit {

  @Input() matrixElement: MatrixElement;
  @Input('question') question: Question;
  domainOptions: DomainOption[] = new Array<DomainOption>();
  previouslySelectedRadioButton: number;
  textInput: string;

  // Permit view to use the enumeration type
  AnswerCategory = AnswerCategory;

  constructor(
    private _loadJsonDataService: SeedDataService,
    private _loadDomainOptionsService: LoadDomainOptionsService,
    private _applicationStateService: ApplicationControllerService
  ) {
  }

  ngOnInit() {
    this.syncToPreviouslyEnteredData();

    // xyzzy - this will be called many times asking for the same value, so we need to use a hash lookup
    //console.log('get domain for ' + AnswerCategory[this.matrixElement.answer_category]);
    //if (this.matrixElement.answer_category !== AnswerCategory.Textbox_in_Matrix) {
      this.domainOptions = this._loadDomainOptionsService.getDomainOptions(this.question.parent_sre_dona_id);
    //}
  }

  radioButtonClick(trackingKey: string, id: number) {
    console.log('Clicked ' + trackingKey + ' with value ' + id);
    UserInputSingleton.getInstance().setUserInput(trackingKey, id.toString());
  }

  textChanged(trackingKey: string) {
    console.log('Changed ' + trackingKey + ' with value ' + this.textInput);
    UserInputSingleton.getInstance().setUserInput(trackingKey, this.textInput);
  }

  private syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = UserInputSingleton.getInstance().getUserInput(this.matrixElement.tracking_key);

    if (previousUserInput) {
      switch (this.matrixElement.answer_category) {
        case AnswerCategory.RadioButons_in_Matrix:
          this.previouslySelectedRadioButton = +previousUserInput.storedValue;
          break;
        case AnswerCategory.Textbox_in_Matrix:
          this.textInput = previousUserInput.storedValue;
          break;
        default:
          let message = 'Not yet supported :' + this.matrixElement.answer_category;
          console.log(message);
          throw new Error(message);
      }
    }
  }

}
