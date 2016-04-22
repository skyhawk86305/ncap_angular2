import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { RadioButtonComponent } from './components/radiobutton/radiobutton.component';
import { PageComponent } from './components/page/page.component';
import { AllPagesComponent } from './components/allPages/allPages.component';

import { SharedService } from '../app/services/shared.service';
import { QuestionService} from '../app/services/question.service';


@Component({
  selector: 'the-app',
  template: `
    <router-outlet></router-outlet>
  `,
  //styleUrls: ['app/example/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    SharedService,
    QuestionService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    //component: RadioButtonComponent,
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
  }
])
export class AppComponent {
}
