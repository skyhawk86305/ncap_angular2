import { Component, Input, OnInit } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { DomainOptions } from  '../../../app/types/domain-options';
import { Question } from       '../../../app/types/question';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { MatrixElement } from '../../../app/types/matrix-element';

import { SeedDataService } from '../../../app/services/seed.data.service';
import { ApplicationStateService } from '../../../app/services/application.state.service';
import { UserInput } from  '../../../app/types/user-input';

@Component({
  selector: 'matrix',
  templateUrl: 'app/components/matrix/matrix.html',
  directives: [TooltipComponent]

})
export class MatrixComponent implements OnInit {

  @Input() question: Question;
  options: DomainOption[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: string;
  matrixElements: MatrixElement[];
  columnHeadings: string[];

  constructor(
    private _seedDataService: SeedDataService,
    private _applicationStateService: ApplicationStateService
  ) {
  }

  ngOnInit() {
    let curQuestionId = this.question.question_id;
    this.matrixElements = this._seedDataService.getMatrixElementForQuestionId(curQuestionId);

    let domainOptions: DomainOptions = this._seedDataService.getDomainOptions();
    this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    //this.question.answer_type;

    // xyzzy Assume first item contains the DOm type + derive column heading from it
    //this.matrixElements[0]..answer_category;
    //columnHeadings


    //let domainOptions: DomainOptions = this._seedDataService.getDomainOptions();
    //this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    //this.addTooltipIfNecessary();

    //this.syncToPreviouslyEnteredData();
  }

  click(trackingKey: string, value: string) {
    console.log('Clicked ' + trackingKey + ' with value ' + trackingKey);

    this._applicationStateService.setUserInput(trackingKey, value);
  }

  //   private addTooltipIfNecessary() {
  //     // Does the question contain a tooltip?
  //     if (this.question.question_text.indexOf('<tooltip') >= 0) {

  //       // xyzzy WIP - convert tooltip tags to --TT
  //       this.question.question_text = this.question.question_text.replace(/<tooltip.*="/i, '--TT');
  //       this.question.question_text = this.question.question_text.replace(/".>/i, '--');

  //       let position = this.question.question_text.indexOf('--TT');
  //       let workingText = this.question.question_text.substring(position + 4);

  //       workingText = workingText.replace(/--.*/, '');
  //       this.questionToolTipId = +workingText;
  //     }
  //   }

  //   private syncToPreviouslyEnteredData() {
  //     // Is there previous entered User Input we need to sync to?
  //     let previousUserInput: UserInput = this._applicationStateService.getUserInput(this.question.tracking_key);
  //     if (previousUserInput) {
  //       this.previouslySelectedStoredValue = previousUserInput.storedValue;
  //     }
  //   }

}
