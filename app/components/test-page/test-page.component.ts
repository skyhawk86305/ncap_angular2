import { Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Response} from 'angular2/http';

import { SurveyPageSre } from '../../types/database-data/survey-page-sre';
import { Subu } from '../../types/database-data/subu';
import { Sre } from '../../types/database-data/sre';

@Component({
  selector: 'http-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/components/test-page/test-page.html'
})
export class TestPageComponent implements OnInit {
  //anca: any;
  display_conditions: any;
  domains: any;
  foca: any;
  //original_survey_metadata: any;
  references: any;
  sre: Sre[];
  subu: Subu[];
  survey_metadata: any;
  survey_page_sre: SurveyPageSre[];
  tooltips: any;

  constructor(
    private http: Http) {
  }

  ngOnInit() {
    this.readJsonFiles();
  }

  readJsonFiles() {
    const BASE_PATH = 'app/seed-data/raw-json/';
    // let temp = this.http.get(BASE_PATH + 'original_survey_metadata.json');
    // // Call map on the response observable to get the parsed people object
    // temp.map(res => res.json())
    //   // Subscribe to the observable to get the parsed people object and attach it to the
    //   // component
    //   .subscribe(data => { this.data = data; console.log(data); });

    Observable.forkJoin(
      this.http.get(BASE_PATH + 'display_conditions.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'domains.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'references.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'sre.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'subu.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'survey_metadata.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'survey_page_sre.json').map((res: Response) => res.json()),
      this.http.get(BASE_PATH + 'tooltips.json').map((res: Response) => res.json())

      // this.http.get(BASE_PATH + 'foca.json').map((res: Response) => res.json()),
      //this.http.get(BASE_PATH + 'anca.json').map((res: Response) => res.json()),
      //this.http.get(BASE_PATH + 'original_survey_metadata.json').map((res: Response) => res.json()),

    ).subscribe(
      data => {
        let i = 0;

        this.display_conditions = data[i++];
        this.domains = data[i++];
        this.references = data[i++];
        this.sre = data[i++];
        this.subu = data[i++];
        this.survey_metadata = data[i++];
        this.survey_page_sre = data[i++];
        this.tooltips = data[i++];

        // //console.log(this.anca);
        // console.log(this.display_conditions);
        // console.log(this.domains);
        // console.log(this.foca);
        // //console.log(this.original_survey_metadata);
        // console.log(this.references);
        // console.log(this.sre);
        // console.log(this.subu);
        // console.log(this.survey_metadata);
        console.log(this.survey_page_sre[6].SEQ_PAG_ID);
        console.log(this.subu[6].SUBU_SORT_ORDER);
        console.log(this.sre[6].SRE_ANCA_ID);
        // console.log(this.tooltips);
      },
      err => console.error(err)
      );
  }
}
