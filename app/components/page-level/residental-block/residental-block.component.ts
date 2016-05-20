import { Component, Input } from 'angular2/core';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { ValidationResult } from '../../../../app/types/enums/validation-result.enum';
import { PageQuestion } from '../../../../app/types/database-data/new/page-question';

@Component({
  selector: 'residental-block',
  templateUrl: 'app/components/page-level/residental-block/residental-block.html'
})
export class ResidentalBlockComponent {

  @Input() question: PageQuestion;
  previouslySelectedStoredValue: string;

  // Permit view to use the enumeration type
  ValidationResult = ValidationResult;

  //ngAfterContentChecked() {
  //ngAfterViewInit() {
  //ngOnDestroy() {
  //ngAfterContentInit() {
  //ngAfterViewChecked() {
  ngAfterContentInit() {
    // Hack to stop the weird error showing in Diagnostics mode
    setTimeout(() => UserInputSingleton.instanceOf().setUserInput(this.question.tracking_key, 'Residental block is WIP'), 100);
  }

}
