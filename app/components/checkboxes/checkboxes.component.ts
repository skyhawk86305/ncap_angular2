import { Component, Input, OnInit } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { QuestionNew } from       '../../../app/types/question-new';
import { TooltipComponent } from '../tooltip/tooltip.component';

import { LoadJsonDataService } from '../../../app/services/load-json-data.service';
import { ApplicationStateService } from '../../../app/services/application-state.service';
import { UserInputService } from '../../../app/services/user-input.service';

import { UserInput } from  '../../../app/types/user-input';

import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

@Component({
  selector: 'checkboxes',
  templateUrl: 'app/components/checkboxes/checkboxes.html',
  directives: [TooltipComponent]

})
export class CheckboxesComponent implements OnInit {

  @Input() question: QuestionNew;
  options: DomainOption[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: number;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  constructor(
    protected _applicationStateService: ApplicationStateService,
    private _loadJsonDataService: LoadJsonDataService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    this._syncToPreviouslyEnteredData();
  }

  click(trackingKey: string, id: number) {
    console.log('Clicked ' + trackingKey + ' with id ' + id);
    this._userInputService.setUserInput(trackingKey, id.toString());
    this._syncToPreviouslyEnteredData();

    // Ask Page Control to re-validate for everything on the page
    this._applicationStateService.requestPagecontrolRevalidate();
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = this._userInputService.getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = +previousUserInput.storedValue;
    }
  }

}
