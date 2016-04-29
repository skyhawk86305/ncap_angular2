import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PageControllerComponent } from './components/page-controller/page-controller.component';
import { AllPagesComponent } from './components/all-pages/all-pages.component';
import { DiagnosticComponent } from './components/diagnostic/diagnostic.component';

import { ApplicationStateService } from '../app/services/application.state.service';
import { LoadJsonDataService } from '../app/services/load.json.data.service';
import { UserInputService } from '../app/services/user.input.service';
import { ValidationService } from '../app/services/validation.service';

@Component({
  selector: 'the-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    LoadJsonDataService,
    ApplicationStateService,
    UserInputService,
    ValidationService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: PageControllerComponent,
    useAsDefault: true
  },
  {
    path: '/page/:pageId',
    name: 'SpecificPage2',
    component: PageControllerComponent
  },
  {
    path: '/:pageId',
    name: 'SpecificPage1',
    component: PageControllerComponent
  },
  {
    path: '/all',
    name: 'All',
    component: AllPagesComponent
  },
  {
    path: '/diag',
    name: 'Diag',
    component: DiagnosticComponent
  }
])
export class AppComponent {
}
