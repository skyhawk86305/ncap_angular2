import { Component } from 'angular2/core';
import { RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { QuestionContainerComponent } from './components/question-containter/question-containter.component';
import { AllPagesComponent } from './components/all-pages/all-pages.component';
import { TestPageComponent } from './components/test-page/test-page.component';

@Component({
  selector: 'the-app',
  template: `
    <router-outlet></router-outlet>
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
    component: QuestionContainerComponent,
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
    component: QuestionContainerComponent
  },
  {
    path: '/scenario/:scenarioId',
    name: 'Scenario',
    component: QuestionContainerComponent
  }
])
export class AppComponent {
}
