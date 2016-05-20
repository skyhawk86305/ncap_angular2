import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { ValidationResult } from '../../../../app/types/enums/validation-result.enum';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
  selector: 're-contact',
  templateUrl: 'app/components/re-contact/re-contact/re-contact.html'
})
export class ReContactComponent {

  @Input() pageId: number;
  // Permit view to use the enumeration type
  public NavigationSingleton = NavigationSingleton;

  ngAfterContentInit() {
    console.log('In re-contact block. Page Id: ' + this.pageId);
    // Hack to stop the weird error showing in Diagnostics mode
    //setTimeout(() => UserInputSingleton.instanceOf().setUserInput(this.question.tracking_key, 'Residental block is WIP'), 100);
  }

}
