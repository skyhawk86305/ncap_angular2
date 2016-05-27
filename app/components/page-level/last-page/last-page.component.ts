import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'last-page',
  templateUrl: 'app/components/page-level/last-page/last-page.html',
  directives: [NavigationButtonsComponent]
})
export class LastPageComponent {
  @Input() pageId: number;
  protected navigationSingleton = NavigationSingleton.instanceOf();
  protected hideNextButtonlast = true;
}
