import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { RadioButtonComponent } from './radiobutton.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    plugh
    <radio-buttons></radio-buttons>
    <router-outlet></router-outlet>
  `,
  //styleUrls: ['app/example/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
    //,    HeroService
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
