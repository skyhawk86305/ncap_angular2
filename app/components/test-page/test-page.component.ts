import { Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'http-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/components/test-page/test-page.html'
})
export class TestPageComponent {
  data: any;

  constructor(http: Http) {
    let temp = http.get('app/seed-data/raw-json/original_survey_metadata.json');
    //console.log(temp);
    // Call map on the response observable to get the parsed people object
    temp.map(res => res.json())

      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => { this.data = data; console.log(data); });
  }
}
