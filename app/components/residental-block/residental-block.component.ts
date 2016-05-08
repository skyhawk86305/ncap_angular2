import { Component, Input } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { QuestionNew } from       '../../../app/types/question-new';

import { UserInputService } from '../../../app/services/user-input.service';
import { UserInput } from  '../../../app/types/user-input';

import { ApplicationStateService } from '../../../app/services/application-state.service';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

@Component({
  selector: 'residental-block',
  templateUrl: 'app/components/residental-block/residental-block.html'
})
export class ResidentalBlockComponent {

  @Input() question: QuestionNew;
  options: DomainOption[];
  previouslySelectedStoredValue: string;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  constructor(
    private _applicationStateService: ApplicationStateService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    this._syncToPreviouslyEnteredData();
    if (!this.previouslySelectedStoredValue) {
      this._userInputService.setUserInput(this.question.tracking_key, 'Residental block is WIP');
    }
  }

  private _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = this._userInputService.getUserInput(this.question.tracking_key);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = previousUserInput.storedValue;
    }
  }

}
