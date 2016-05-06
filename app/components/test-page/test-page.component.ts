import { Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import { tooltip } from '../../../app/seed-data/tooltip';
import { sre } from '../../../app/seed-data/sre';
import { surveyPageSre } from '../../../app/seed-data/survey-page-sre';

import _ from 'lodash';

@Component({
    selector: 'test-page',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'app/components/test-page/test-page.html'
})
export class TestPageComponent implements OnInit {

    responseData: string;

    constructor(
        private _http: Http
    ) {
    }

    ngOnInit() {
        //this.responseData = JSON.stringify(tooltip);
        //this.responseData = JSON.stringify(surveyPageSre);

        // find unique page numbers


        var foca_monad = _.chain(sre).map(r => { return r.sre_foca_id; }).uniq();
        var foca_uniq_array = foca_monad.value();
        this.responseData = foca_uniq_array.toString();




        console.log(foca_uniq_array.toString());
    }

    click() {
        // console.log(this._loadJsonDataService.readJsonFilesPromiseAll().then(data => { data.tooltips[0].definition }));
        console.log(tooltip);
    }

}
