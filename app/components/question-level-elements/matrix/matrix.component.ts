import { Component, Input, OnInit } from 'angular2/core';
import { Domain } from '../../../../app/types/database-data/domain';
import { RenderHtmlStringIncludingTooltipsComponent } from '../../other/html-including-tooltips/html-including-tooltips.component';
import { MatrixRowDivComponent } from '../matrix-row-div/matrix-row-div.component';
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
  directives: [RenderHtmlStringIncludingTooltipsComponent, MatrixRowDivComponent]
})
export class MatrixComponent implements OnInit {

  @Input() question: PageQuestion;
  @Input() showValidation: boolean = true;
  protected navigationSingleton = NavigationSingleton.instanceOf();
  protected validationSingleton = ValidationSingleton.instanceOf();
  protected userInputSingleton = UserInputSingleton.instanceOf();
  domainOptions: Domain[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: string;
  matrixElements: SubuQuestion[];
  columnHeadings: string[];
  xyzzy: AnswerCategory;
  protected finalColumnText: string;
  domainOptionsForLastColDropDown: Domain[];

  // Permit view to use the enumeration type
  AnswerCategory = AnswerCategory;

  ngOnInit() {
    this.matrixElements = SeedDataMatrixSingleton.instanceOf().getMatrixElementsForSreUid(this.question.sre_uid);
    this.domainOptions = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(this.question.parent_sre_dona_id);

    if (this.matrixElements[0].sre_anca_id === AnswerCategory.RadioButtons_in_Matrix_DropDownLastCol) {
      let lastDomain: Domain = this.domainOptions.pop();
      this.finalColumnText = lastDomain.displayed_value;

      this.domainOptionsForLastColDropDown = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(1);
    }

    this.xyzzy = this.matrixElements[0].sre_anca_id;
    
  }

  click(trackingKey: string, value: string) {
    console.log('Clicked ' + trackingKey + ' with value ' + trackingKey);
    UserInputSingleton.instanceOf().setUserInput(trackingKey, value);
  }
}
