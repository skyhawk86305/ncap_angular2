import { Component, Input, OnInit } from 'angular2/core';
import { Domain } from '../../../../app/types/database-data/domain';
import { RenderHtmlStringIncludingTooltipsComponent } from '../../other/html-including-tooltips/html-including-tooltips.component';
import { MatrixRowComponent } from '../matrix-row/matrix-row.component';
import { LoadDomainOptionsSingleton } from '../../../../app/vanilla-singletons/load-domain-options.singleton';
import { SeedDataMatrixSingleton } from '../../../../app/vanilla-singletons/seed-data-matrix.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { AnswerCategory } from  '../../../../app/types/enums/answer-category.enum';
import { PageQuestion } from '../../../../app/types/database-data/page-question';
import { SubuQuestion } from '../../../../app/types/database-data/subu-question';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { ValidationSingleton } from '../../../../app/vanilla-singletons/validation.singleton';

@Component({
  selector: 'matrix',
  templateUrl: 'app/components/question-level-elements/matrix/matrix.html',
  styleUrls: ['app/components/question-level-elements/matrix/matrix.css'],
  directives: [RenderHtmlStringIncludingTooltipsComponent, MatrixRowComponent]
})
export class MatrixComponent implements OnInit {

  @Input() question: PageQuestion;
  @Input() showValidation: boolean = true;
  protected navigationSingleton = NavigationSingleton.instanceOf();
  protected validationSingleton = ValidationSingleton.instanceOf();
  protected userInputSingleton = UserInputSingleton.instanceOf();
  protected AnswerCategory = AnswerCategory; // Permit view to use the enumeration type
  domainOptions: Domain[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: string;
  matrixElements: SubuQuestion[];
  columnHeadings: string[];
  answerCategory: AnswerCategory;
  protected finalColumnText: string;

  ngOnInit() {
    this.matrixElements = SeedDataMatrixSingleton.instanceOf().getMatrixElementsForSreUid(this.question.sre_uid);
    this.answerCategory = this.matrixElements[0].sre_anca_id;
    this.domainOptions = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id).slice();

    if (this.matrixElements[0].sre_anca_id === AnswerCategory.RadioButtons_in_Matrix_DropDownLastCol) {
      let lastDomain: Domain = this.domainOptions.pop();
      this.finalColumnText = lastDomain.displayed_value;
    }
  }

  click(trackingKey: string, value: string) {
    console.log('Clicked ' + trackingKey + ' with value ' + trackingKey);
    UserInputSingleton.instanceOf().setUserInput(trackingKey, value);
  }
}
