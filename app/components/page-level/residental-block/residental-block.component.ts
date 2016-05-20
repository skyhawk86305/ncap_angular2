import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
  selector: 'residental-block',
  templateUrl: 'app/components/page-level/residental-block/residental-block.html'
})
export class ResidentalBlockComponent {

  @Input() pageId: number;
  // Permit view to use the enumeration type
  public NavigationSingleton = NavigationSingleton;

  ngAfterContentInit() {
    console.log('In residental block. Page Id: ' + this.pageId);
    // Hack to stop the weird error showing in Diagnostics mode
    //setTimeout(() => UserInputSingleton.instanceOf().setUserInput(this.question.tracking_key, 'Residental block is WIP'), 100);
  }
}
