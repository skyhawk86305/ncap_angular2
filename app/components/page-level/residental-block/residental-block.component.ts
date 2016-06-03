import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'residential-block',
  templateUrl: 'app/components/page-level/residential-block/residential-block.html',
  directives: [NavigationButtonsComponent]
})
export class ResidentialBlockComponent {

  @Input() pageId: number;
  protected navigationSingleton = NavigationSingleton.instanceOf();

  ngAfterContentInit() {
    console.log('In residental block. Page Id: ' + this.pageId);
    // Hack to stop the weird error showing in Diagnostics mode
    //setTimeout(() => UserInputSingleton.instanceOf().setUserInput(this.question.tracking_key, 'Residental block is WIP'), 100);
  }
}
