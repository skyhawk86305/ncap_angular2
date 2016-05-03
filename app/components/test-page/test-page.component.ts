import { Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Response} from 'angular2/http';

@Component({
  selector: 'http-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/components/test-page/test-page.html'
})
export class TestPageComponent implements OnInit {
  data: any;

  constructor(
    private http: Http) {
  }

  ngOnInit() {
    this.readJsonFiles();
  }

  readJsonFiles() {
    const BASE_PATH = 'app/seed-data/raw-json/';
    let temp = this.http.get(BASE_PATH + 'original_survey_metadata.json');
    // Call map on the response observable to get the parsed people object
    temp.map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => { this.data = data; console.log(data); });

    Observable.forkJoin(
      this.http.get(BASE_PATH + 'anca.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'display_conditions.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'domains.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'foca.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'original_survey_metadata.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'references.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'sre.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'subu.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'survey_metadata.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'survey_page_sre.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'tooltips.json').map((res: Response) => res.json())
    ).subscribe(
      data => {
        this.data = data[0];
        console.log(this.data);
        this.data = data[1];
        console.log(this.data);
        this.data = data[2];
        console.log(this.data);
        this.data = data[3];
        console.log(this.data);
        this.data = data[4];
        console.log(this.data);
        this.data = data[5];
        console.log(this.data);
        this.data = data[6];
        console.log(this.data);
        this.data = data[7];
        console.log(this.data);
        this.data = data[8];
        console.log(this.data);
        this.data = data[9];
        console.log(this.data);
        this.data = data[10];
        console.log(this.data);
      },
      err => console.error(err)
      );
  }
}
