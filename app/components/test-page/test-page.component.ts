import { Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Response} from 'angular2/http';

import { SurveyPageSre } from '../../types/database-data/survey-page-sre';
import { Subu } from '../../types/database-data/subu';
import { Sre } from '../../types/database-data/sre';
import { Tooltip } from '../../types/database-data/tooltip';

@Component({
  selector: 'http-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/components/test-page/test-page.html'
})
export class TestPageComponent implements OnInit {
  display_conditions: any;
  domains: any;
  references: any;
  sre: Sre[];
  subu: Subu[];
  survey_metadata: any;
  survey_page_sre: SurveyPageSre[];
  tooltips: Tooltip[];

  //anca: any;
  //foca: any;
  //original_survey_metadata: any;

  constructor(
    private http: Http) {
  }

  ngOnInit() {
    this.readJsonFiles();
  }

  readJsonFiles() {
    let that = this;
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

        that.display_conditions = data[i++];
        that.domains = data[i++];
        that.references = data[i++];
        that.sre = data[i++];
        that.subu = data[i++];
        that.survey_metadata = data[i++];
        that.survey_page_sre = data[i++];
        that.tooltips = data[i++];

        // //console.log(that.anca);
        // console.log(that.display_conditions);
        // console.log(that.domains);
        // console.log(that.foca);
        // //console.log(that.original_survey_metadata);
        // console.log(that.references);
        // console.log(that.sre);
        // console.log(that.subu);
        // console.log(that.survey_metadata);
        console.log(that.survey_page_sre[6].seq_pag_id);
        console.log(that.subu[6].subu_sort_order);
        console.log(that.sre[6].sre_anca_id);
        console.log(that.tooltips[1].definition);
        // console.log(that.tooltips);
      },
      err => console.error(err)
      );
  }
}
