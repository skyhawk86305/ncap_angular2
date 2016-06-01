import { Component } from 'angular2/core';
import { RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { NgSwitchPageTypeComponent } from './components/page-level/ng-switch-page-type/ng-switch-page-type.component';
import { AllPagesComponent } from './components/page-level/all-pages/all-pages.component';
import { TestPageComponent } from './components/page-level/test-page/test-page.component';

@Component({
  selector: 'the-app',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    Route
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: NgSwitchPageTypeComponent,
    useAsDefault: true
  },
  {
    path: '/all',
    name: 'All',
    component: AllPagesComponent
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
  },
  {
    path: '/:pageId',
    name: 'SpecificPage1',
    component: NgSwitchPageTypeComponent
  },
  {
    path: '/scenario/:scenarioId',
    name: 'Scenario',
    component: NgSwitchPageTypeComponent
  }
])

export class AppComponent {
}
