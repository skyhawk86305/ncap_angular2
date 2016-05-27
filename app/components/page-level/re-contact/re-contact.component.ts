import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 're-contact',
  templateUrl: 'app/components/page-level/re-contact/re-contact.html',
  directives: [NavigationButtonsComponent]
})
export class ReContactComponent {

  @Input() pageId: number;
  protected navigationSingleton = NavigationSingleton.instanceOf();
}
