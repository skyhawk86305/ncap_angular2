import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
  selector: 'birth-certificate',
  templateUrl: 'app/components/page-level/birth-certificate/birth-certificate.html'
})
export class BirthCertificateComponent {

  @Input() pageId: number;
  // Permit view to use the enumeration type
  public NavigationSingleton = NavigationSingleton;

  ngAfterContentInit() {
    console.log('Page Id: ' + this.pageId);
    // Hack to stop the weird error showing in Diagnostics mode
    //setTimeout(() => UserInputSingleton.instanceOf().setUserInput(this.question.tracking_key, 'Residental block is WIP'), 100);
  }

}
