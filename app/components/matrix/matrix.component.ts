import { Component, Input, OnInit } from 'angular2/core';
import { ComponentHelperClass } from  '../component-helper-class';
import { DomainOption } from   '../../../app/types/domain-option';
import { Question } from       '../../../app/types/question';
import { MatrixElement } from '../../../app/types/matrix-element';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { MatrixRowComponent } from '../matrix-row/matrix-row.component';
import { MatrixElement2Component } from '../matrixElement2/matrixElement2.component';
import { LoadJsonDataService } from '../../../app/services/load-json-data.service';
import { LoadDomainOptionsService } from '../../../app/services/load-domain-options.service';
import { ApplicationStateService } from '../../../app/services/application-state.service';
import { MatrixDbDataService } from '../../../app/services/matrix-db-data.service';
import { UserInputService } from '../../../app/services/user-input.service';
import { UserInput } from  '../../../app/types/user-input';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { AnswerCategory } from  '../../../app/types/enums/answer-category.enum';

@Component({
  selector: 'matrix',
  templateUrl: 'app/components/matrix/matrix.html',
  directives: [TooltipComponent, MatrixRowComponent, MatrixElement2Component]
})
export class MatrixComponent implements OnInit {

  @Input() question: Question;
  @Input() showValidation: boolean = true;
  domainOptions: DomainOption[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: string;
  matrixElements: MatrixElement[];
  columnHeadings: string[];
  xyzzy: AnswerCategory;

  // Permit view to use the enumeration type
  AnswerCategory = AnswerCategory;

  constructor(
    private _loadJsonDataService: LoadJsonDataService,
    private _loadDomainOptionsService: LoadDomainOptionsService,
    private _matrixDbDataService: MatrixDbDataService,
    private _applicationStateService: ApplicationStateService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    ComponentHelperClass.addTooltipIfNecessary(this.question);

    this.matrixElements = this._matrixDbDataService.getMatrixElementsForSreUid(this.question.obj_uid);
    this.domainOptions = this._loadDomainOptionsService.getDomainOptions(this.question.parent_sre_dona_id);
    this.xyzzy = this.matrixElements[0].answer_category;
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
