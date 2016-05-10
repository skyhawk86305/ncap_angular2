import { Component } from 'angular2/core';
import { RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PageControllerComponent } from './components/page-controller/page-controller.component';
import { AllPagesComponent } from './components/all-pages/all-pages.component';
import { DiagnosticComponent } from './components/diagnostic/diagnostic.component';
import { TestPageComponent } from './components/test-page/test-page.component';

import { ApplicationStateService } from '../app/services/application-state.service';
import { LoadJsonDataService } from '../app/services/load-json-data.service';
import { UserInputService } from '../app/services/user-input.service';
import { ValidationService } from '../app/services/validation.service';
import { LoadDomainOptionsService } from '../app/services/load-domain-options.service';
import { MatrixDbDataService } from '../app/services/matrix-db-data.service';

@Component({
  selector: 'the-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    Route,
    LoadJsonDataService,
    ApplicationStateService,
    UserInputService,
    ValidationService,
    LoadDomainOptionsService,
    MatrixDbDataService
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
    path: '/diag/:diagMode',
    name: 'Diag',
    component: PageControllerComponent
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPageComponent
  },
  {
    path: '/test-page',
    name: 'TestPage',
    component: TestPageComponent
  }

])
export class AppComponent {
}
