import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { DomainOption } from   '../../../app/types/domain-option';
import { DomainOptions } from  '../../../app/types/domain-options';
import { Question } from       '../../../app/types/question';
import { TooltipComponent } from '../tooltip/tooltip.component';

import { SeedDataService } from '../../../app/services/seed.data.service';
import { ApplicationStateService } from '../../../app/services/application.state.service';
import { UserInputService } from '../../../app/services/user.input.service';

import { UserInput } from  '../../../app/types/user-input';

@Component({
  selector: 'radio-buttons',
  templateUrl: 'app/components/radiobutton/radioButtons.html',
  directives: [TooltipComponent]

})
export class RadioButtonComponent implements OnInit {

  @Input() question: Question;
  options: DomainOption[];
  questionToolTipId: number = -1;
  previouslySelectedStoredValue: number;

  constructor(
    private _router: Router,
    private _seedDataService: SeedDataService,
    private _applicationStateService: ApplicationStateService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    let domainOptions: DomainOptions = this._seedDataService.getDomainOptions();
    this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    this.addTooltipIfNecessary();

    this._syncToPreviouslyEnteredData();
  }

  click(trackingKey: string, id: number) {
    console.log('Clicked ' + trackingKey + ' with id ' + id);
    this._userInputService.setUserInput(trackingKey, id.toString());
    this._syncToPreviouslyEnteredData();
  }

  private addTooltipIfNecessary() {
    // Does the question contain a tooltip?
    if (this.question.question_text.indexOf('<tooltip') >= 0) {

      // xyzzy WIP - convert tooltip tags to --TT
      this.question.question_text = this.question.question_text.replace(/<tooltip.*="/i, '--TT');
      this.question.question_text = this.question.question_text.replace(/".>/i, '--');

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
