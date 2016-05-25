import { Component, Input, OnInit } from 'angular2/core';
import { ComponentHelperClass } from  '../../component-helper-class';
import { Domain } from '../../../../app/types/database-data/domain';
import { RenderHtmlStringIncludingTooltipsComponent } from '../../other/html-including-tooltips/html-including-tooltips.component';
import { MatrixRowComponent } from '../matrix-row/matrix-row.component';
import { MatrixRowDivComponent } from '../matrix-row-div/matrix-row-div.component';
import { MatrixElement2Component } from '../matrixElement2/matrixElement2.component';
import { LoadDomainOptionsSingleton } from '../../../../app/vanilla-singletons/load-domain-options.singleton';
import { SeedDataMatrixSingleton } from '../../../../app/vanilla-singletons/seed-data-matrix.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { UserInput } from  '../../../../app/types/user-input';
import { ValidationType } from '../../../../app/types/enums/validation-type.enum';
import { AnswerCategory } from  '../../../../app/types/enums/answer-category.enum';
import { PageQuestion } from '../../../../app/types/database-data/page-question';
import { SubuQuestion } from '../../../../app/types/database-data/subu-question';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
  selector: 'matrix',
  templateUrl: 'app/components/question-level-elements/matrix/matrix.html',
  styleUrls: ['app/components/question-level-elements/matrix/matrix.css'],
  directives: [RenderHtmlStringIncludingTooltipsComponent, MatrixRowComponent, MatrixRowDivComponent, MatrixElement2Component]
})
export class MatrixComponent implements OnInit {

  @Input() question: PageQuestion;
  @Input() showValidation: boolean = true;
  public NavigationSingleton = NavigationSingleton; // Permit html to access Singleton
  domainOptions: Domain[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: string;
  matrixElements: SubuQuestion[];
  columnHeadings: string[];
  xyzzy: AnswerCategory;

  // Permit view to use the enumeration type
  AnswerCategory = AnswerCategory;

  ngOnInit() {
    //ComponentHelperClass.addTooltipIfNecessary(this.question);

    this.matrixElements = SeedDataMatrixSingleton.instanceOf().getMatrixElementsForSreUid(this.question.sre_uid);
    this.domainOptions = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id);
    this.xyzzy = this.matrixElements[0].sre_anca_id;
  }

  click(trackingKey: string, value: string) {
    console.log('Clicked ' + trackingKey + ' with value ' + trackingKey);

    UserInputSingleton.instanceOf().setUserInput(trackingKey, value);
  }

  calculateValidatiodCSS(curMatrixElement: SubuQuestion) {
    let result = '';

    if (this.showValidation) {
      let userInput: UserInput = UserInputSingleton.instanceOf().getUserInput(curMatrixElement.tracking_key);
      let storedValue = userInput ? userInput.storedValue : '';
      let fieldPopulated: boolean = storedValue !== null && storedValue.length > 0;

      if (!fieldPopulated) {
        switch (curMatrixElement.bypass_enum_code) {
          case ValidationType.requested:
            result = 'ncap-requested';
            break;
          case ValidationType.required:
            result = 'ncap-required';
            break;
          default:
            result = '';
            break;
        }
      }
    }

    return result;
  }

}
