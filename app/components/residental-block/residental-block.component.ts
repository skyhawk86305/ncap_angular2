import { Component, Input } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { Question } from       '../../../app/types/question';

import { UserInputSingleton } from '../../../app/services/vanilla-singleton/user-input.singleton';
import { UserInput } from  '../../../app/types/user-input';

import { ApplicationControllerService } from '../../../app/services/application-controller.service';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

@Component({
  selector: 'residental-block',
  templateUrl: 'app/components/residental-block/residental-block.html'
})
export class ResidentalBlockComponent {

  @Input() question: Question;
  previouslySelectedStoredValue: string;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  constructor(
    private _applicationStateService: ApplicationControllerService
  ) {
  }

  //ngAfterContentChecked() {
  //ngAfterViewInit() {
  //ngOnDestroy() {
  //ngAfterContentInit() {
  //ngAfterViewChecked() {
  ngAfterContentInit() {
    // Hack to stop the weird error showing in Diagnostics mode
    setTimeout(() => UserInputSingleton.getInstance().setUserInput(this.question.tracking_key, 'Residental block is WIP'), 100);
  }

}
