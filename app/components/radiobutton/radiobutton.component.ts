import { Component, Input, OnInit } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { DomainOptions } from  '../../../app/types/domain-options';
import { QuestionNew } from       '../../../app/types/question-new';
import { TooltipComponent } from '../tooltip/tooltip.component';

import { LoadJsonDataService } from '../../../app/services/load-json-data.service';
import { ApplicationStateService } from '../../../app/services/application-state.service';
import { UserInputService } from '../../../app/services/user-input.service';

import { UserInput } from  '../../../app/types/user-input';

import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

@Component({
  selector: 'radio-buttons',
  templateUrl: 'app/components/radiobutton/radioButtons.html',
  directives: [TooltipComponent]

})
export class RadioButtonComponent implements OnInit {

  @Input() question: QuestionNew;
  options: DomainOption[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: number;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  constructor(
    private _loadJsonDataService: LoadJsonDataService,
    private _applicationStateService: ApplicationStateService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    let domainOptions: DomainOptions = this._loadJsonDataService.getDomainOptions();
    this.options = domainOptions.getDomainOption(this.question.parent_sre_dona_id);

    this.addTooltipIfNecessary();

    this._syncToPreviouslyEnteredData();
  }

  click(trackingKey: string, id: number) {
    console.log('Clicked ' + trackingKey + ' with id ' + id);
    this._userInputService.setUserInput(trackingKey, id.toString());
    this._syncToPreviouslyEnteredData();

    // Ask Page Control to re-validate for everything on the page
    this._applicationStateService.requestPagecontrolRevalidate();
  }

  private addTooltipIfNecessary() {
    // Does the question contain a tooltip?
    if (this.question.question_text.indexOf('<tooltip') >= 0 || this.question.question_text.indexOf('--TT') >= 0) {

      // xyzzy WIP - convert tooltip tags to --TT
      //this.question.question_text = this.question.question_text.replace('Has the child ever been diagnosed with ASD.*=\'/i', '--TT');
      //this.question.question_text = this.question.question_text.replace('/\'.>/i', '--');

      this.question.question_text = this.question.question_text.replace('<tooltip id=\'', '--TT').replace('\'/>', '--');

      let position = this.question.question_text.indexOf('--TT');
      let workingText = this.question.question_text.substring(position + 4);

      workingText = workingText.replace(/--.*/, '');
      this.questionToolTipId = +workingText;
    }
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = this._userInputService.getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = +previousUserInput.storedValue;
    }
  }

}
