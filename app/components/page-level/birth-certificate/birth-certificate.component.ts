import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'birth-certificate',
  templateUrl: 'app/components/page-level/birth-certificate/birth-certificate.html',
  directives: [NavigationButtonsComponent]
})
export class BirthCertificateComponent {

  @Input() pageId: number;
  // Permit view to use the enumeration type
  protected navigationSingleton = NavigationSingleton.instanceOf();
}
