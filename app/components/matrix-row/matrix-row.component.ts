import { Component, Input, OnInit } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { DomainOptions } from  '../../../app/types/domain-options';
import { Question } from       '../../../app/types/question';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { MatrixElement } from '../../../app/types/matrix-element';

import { LoadJsonDataService } from '../../../app/services/load.json.data.service';
import { ApplicationStateService } from '../../../app/services/application.state.service';
import { UserInputService } from '../../../app/services/user.input.service';

import { UserInput } from  '../../../app/types/user-input';

@Component({
  selector: '[matrixElement]',
  templateUrl: 'app/components/matrix-row/matrix-row.html',
  directives: [TooltipComponent]

})
export class MatrixRowComponent implements OnInit {

  //@Input() ColumnHeadings: string[];
  @Input() matrixElement: MatrixElement;
  @Input('question') question: Question;
  options: DomainOption[];
  previouslySelectedRadioButton: number;
  textInput: string;

  constructor(
    private _loadJsonDataService: LoadJsonDataService,
    private _applicationStateService: ApplicationStateService,
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
    this.syncToPreviouslyEnteredData();

    // xyzzy - this will be called many times asking for the same value, so we need to use a hash lookup
    if (this.matrixElement.answer_category === 'RadioButtons') {
      let domainOptions: DomainOptions = this._loadJsonDataService.getDomainOptions();
      this.options = domainOptions.getDomainOption(this.question.answer_lookup);
    } else {
      this.options = new Array<DomainOption>();
    }
  }

  radioButtonClick(trackingKey: string, id: number) {
    console.log('Clicked ' + trackingKey + ' with value ' + id);
    this._userInputService.setUserInput(trackingKey, id.toString());
  }

  textChanged(trackingKey: string) {
    console.log('Changed ' + trackingKey + ' with value ' + this.textInput);
    this._userInputService.setUserInput(trackingKey, this.textInput);
  }

  private syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    let previousUserInput: UserInput = this._userInputService.getUserInput(this.matrixElement.tracking_key);

    if (previousUserInput) {
      switch (this.matrixElement.answer_category) {
        case 'RadioButtons':
          this.previouslySelectedRadioButton = +previousUserInput.storedValue;
          break;
        case 'Textbox_in_Matrix':
          this.textInput = previousUserInput.storedValue;
          break;
        default:
          throw new Error('Not yet supported :' + this.matrixElement.answer_category);
      }
    }
  }

}
