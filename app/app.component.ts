import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { RadioButtonComponent } from './radiobutton.component';
import { QuestionService} from './question.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  //styleUrls: ['app/example/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
    , QuestionService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: RadioButtonComponent,
    useAsDefault: true
  }
  // ,
  // {
  //   path: '/detail/:id',
  //   name: 'HeroDetail',
  //   component: HeroDetailComponent
  // },
  // {
  //   path: '/heroes',
  //   name: 'Heroes',
  //   component: HeroesComponent
  //}
])
export class AppComponent {
  title = 'NCAP Survey';
}
