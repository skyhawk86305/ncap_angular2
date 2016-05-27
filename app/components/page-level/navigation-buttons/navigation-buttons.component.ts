import { Component } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
  selector: 'navigation-buttons',
  templateUrl: 'app/components/page-level/navigation-buttons/navigation-buttons.html'
})

export class NavigationButtonsComponent {
  renderButtons: boolean = true;
  protected navigationSingleton = NavigationSingleton.instanceOf();
}
