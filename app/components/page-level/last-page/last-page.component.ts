import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
  selector: 'last-page',
  templateUrl: 'app/components/page-level/last-page/last-page.html'
})
export class LastPageComponent {

  @Input() pageId: number;
  protected navigationSingleton = NavigationSingleton.instanceOf();
}
