import { Component, Input, OnInit } from 'angular2/core';
import { ComponentHelperClass } from  '../component-helper-class';
import { DomainOption } from   '../../../app/types/database-data/new/domain-option';
import { MatrixElement } from '../../../app/types/matrix-element';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { MatrixRowComponent } from '../matrix-row/matrix-row.component';
import { MatrixElement2Component } from '../matrixElement2/matrixElement2.component';
import { LoadDomainOptionsSingleton } from '../../../app/vanilla-singletons/load-domain-options.singleton';
import { SeedDataMatrixSingleton } from '../../../app/vanilla-singletons/seed-data-matrix.singleton';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { UserInput } from  '../../../app/types/user-input';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { AnswerCategory } from  '../../../app/types/enums/answer-category.enum';
import { PageQuestion } from '../../../app/types/database-data/new/page-question';

@Component({
  selector: 'matrix',
  templateUrl: 'app/components/matrix/matrix.html',
  directives: [TooltipComponent, MatrixRowComponent, MatrixElement2Component]
})
export class MatrixComponent implements OnInit {

  @Input() question: PageQuestion;
  @Input() showValidation: boolean = true;
  domainOptions: DomainOption[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: string;
  matrixElements: MatrixElement[];
  columnHeadings: string[];
  xyzzy: AnswerCategory;

  // Permit view to use the enumeration type
  AnswerCategory = AnswerCategory;

  ngOnInit() {
    ComponentHelperClass.addTooltipIfNecessary(this.question);

    this.matrixElements = SeedDataMatrixSingleton.instanceOf().getMatrixElementsForSreUid(this.question.sre_uid);
    this.domainOptions = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id);
    this.xyzzy = this.matrixElements[0].answer_category;
  }

  click(trackingKey: string, value: string) {
    console.log('Clicked ' + trackingKey + ' with value ' + trackingKey);

    UserInputSingleton.instanceOf().setUserInput(trackingKey, value);
  }

  calculateValidatiodCSS(curMatrixElement: MatrixElement) {
    let cssClass = '';

    if (this.showValidation) {
      let userInput: UserInput = UserInputSingleton.instanceOf().getUserInput(curMatrixElement.tracking_key);
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
