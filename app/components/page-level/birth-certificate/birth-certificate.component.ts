import { Component, Input } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
  selector: 'birth-certificate',
  templateUrl: 'app/components/page-level/birth-certificate/birth-certificate.html'
})
export class BirthCertificateComponent {

  @Input() pageId: number;
  // Permit view to use the enumeration type
  public NavigationSingleton = NavigationSingleton;

}
