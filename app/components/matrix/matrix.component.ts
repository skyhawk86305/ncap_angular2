import { Component, Input, OnInit } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { QuestionNew } from       '../../../app/types/question-new';
import { MatrixElement } from '../../../app/types/matrix-element';

import { TooltipComponent } from '../tooltip/tooltip.component';
import { MatrixRowComponent } from '../matrix-row/matrix-row.component';

import { LoadJsonDataService } from '../../../app/services/load-json-data.service';
import { LoadDomainOptionsService } from '../../../app/services/load-domain-options.service';
import { ApplicationStateService } from '../../../app/services/application-state.service';
import { UserInputService } from '../../../app/services/user-input.service';

import { UserInput } from  '../../../app/types/user-input';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';

@Component({
  selector: 'matrix',
  templateUrl: 'app/components/matrix/matrix.html',
  directives: [TooltipComponent, MatrixRowComponent]
})
export class MatrixComponent implements OnInit {

  @Input() question: QuestionNew;
  @Input() showValidation: boolean = true;
  domainOptions: DomainOption[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: string;
  matrixElements: MatrixElement[];
  columnHeadings: string[];

  constructor(
    private _loadJsonDataService: LoadJsonDataService,
    private _loadDomainOptionsService: LoadDomainOptionsService,
    private _applicationStateService: ApplicationStateService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    let curQuestionId = this.question.question_id;
    this.matrixElements = this._loadJsonDataService.getMatrixElementsForQuestionId(curQuestionId);

    this.domainOptions = this._loadDomainOptionsService.getDomainOptions(this.question.parent_sre_dona_id);
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
