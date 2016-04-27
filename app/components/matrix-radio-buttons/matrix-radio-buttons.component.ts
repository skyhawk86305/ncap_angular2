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
  selector: '[matrixRadioButtons]',
  templateUrl: 'app/components/matrix-radio-buttons/matrix-radio-buttons.html',
  directives: [TooltipComponent]

})
export class MatrixRadioButtonsComponent implements OnInit {

  //@Input() ColumnHeadings: string[];
  @Input() matrixRadioButtons: MatrixElement;
  @Input('question') question: Question;
  options: DomainOption[];
  previouslySelectedStoredValue: string;

  constructor(
    private _seedDataService: SeedDataService,
    private _applicationStateService: ApplicationStateService
  ) {
  }

  ngOnInit() {
    // xyzzy - this will be called many times asking for the same value, so we need to use a hash lookup 
    let domainOptions: DomainOptions = this._seedDataService.getDomainOptions();
    this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    this.syncToPreviouslyEnteredData();
  }

  private syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = this._applicationStateService.getUserInput(this.matrixRadioButtons.tracking_id);
    if (previousUserInput) {
      this.previouslySelectedStoredValue = previousUserInput.storedValue;
    }
  }

  click(trackingKey: string, value: string) {
    console.log('Clicked ' + trackingKey + ' with value ' + trackingKey);

    this._applicationStateService.setUserInput(trackingKey, value);
  }

}
