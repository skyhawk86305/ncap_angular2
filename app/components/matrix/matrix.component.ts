import { Component, Input, OnInit } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { DomainOptions } from  '../../../app/types/domain-options';
import { Question } from       '../../../app/types/question';
import { MatrixElement } from '../../../app/types/matrix-element';

import { TooltipComponent } from '../tooltip/tooltip.component';
import { MatrixRowComponent } from '../matrix-row/matrix-row.component';

import { LoadJsonDataService } from '../../../app/services/load.json.data.service';
import { ApplicationStateService } from '../../../app/services/application.state.service';
import { UserInputService } from '../../../app/services/user.input.service';

import { UserInput } from  '../../../app/types/user-input';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';

@Component({
  selector: 'matrix',
  templateUrl: 'app/components/matrix/matrix.html',
  directives: [TooltipComponent, MatrixRowComponent]
})
export class MatrixComponent implements OnInit {

  @Input() question: Question;
  @Input() showValidation: boolean = true;
  options: DomainOption[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: string;
  matrixElements: MatrixElement[];
  columnHeadings: string[];

  constructor(
    private _loadJsonDataService: LoadJsonDataService,
    private _applicationStateService: ApplicationStateService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    let curQuestionId = this.question.question_id;
    this.matrixElements = this._loadJsonDataService.getMatrixElementForQuestionId(curQuestionId);

    let domainOptions: DomainOptions = this._loadJsonDataService.getDomainOptions();
    this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    //this.question.answer_type;

    // xyzzy Assume first item contains the DOm type + derive column heading from it
    //this.matrixElements[0]..answer_category;
    //columnHeadings


    //let domainOptions: DomainOptions = this._loadJsonDataService.getDomainOptions();
    //this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    //this.addTooltipIfNecessary();

    //this.syncToPreviouslyEnteredData();
  }

  click(trackingKey: string, value: string) {
    console.log('Clicked ' + trackingKey + ' with value ' + trackingKey);

    this._userInputService.setUserInput(trackingKey, value);
  }

  calculateValidatiodCSS(curMatrixElement: MatrixElement) {
    let cssClass = '';

    if (this.showValidation) {
      let userInput: UserInput = this._userInputService.getUserInput(curMatrixElement.tracking_key);
      let storedValue = userInput ? userInput.storedValue : '';
      let fieldPopulated: boolean = storedValue !== null && storedValue.length > 0;

      if (!fieldPopulated) {
        switch (curMatrixElement.validation_type) {
          case ValidationType.requested:
            cssClass = 'ncap-requested';
            break;
          case ValidationType.required:
            cssClass = 'ncap-required';
            break;
        }
      }
    }

    return cssClass;
  }

}
