import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
  selector: 're-contact',
  templateUrl: 'app/components/re-contact/re-contact/re-contact.html'
})
export class ReContactComponent {

  @Input() pageId: number;
  // Permit view to use the enumeration type
  public NavigationSingleton = NavigationSingleton;

}
