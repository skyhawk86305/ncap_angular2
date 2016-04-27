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

  constructor(
    private _seedDataService: SeedDataService,
    private _applicationStateService: ApplicationStateService
  ) {
  }

  ngOnInit() {
  }


}
