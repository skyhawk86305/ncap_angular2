import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PageComponent } from './components/page/page.component';
import { AllPagesComponent } from './components/allPages/allPages.component';
import { DiagnosticComponent } from './components/diagnostic/diagnostic.component';

import { ApplicationStateService } from '../app/services/application.state.service';
import { SeedDataService } from '../app/services/seed.data.service';
import { UserInputService } from '../app/services/user.input.service';

@Component({
  selector: 'the-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    SeedDataService,
    ApplicationStateService,
    UserInputService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: PageComponent,
    useAsDefault: true
  }
  ,
  {
    path: '/page/:pageId',
    name: 'Home',
    component: PageComponent
  },
  {
    path: '/all',
    name: 'Home',
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
