import { Component, OnInit} from 'angular2/core';
import { HTTP_PROVIDERS} from 'angular2/http';

import { sre } from '../../../app/seed-data/sre';
import { surveyPageSre } from '../../../app/seed-data/survey-page-sre';

import { Sre } from '../../../app/types/database-data/sre';
import { SurveyPageSre } from '../../../app/types/database-data/survey-page-sre';

import { LoadDomainOptionsService } from '../../../app/services/load-domain-options.service';

import _ from 'lodash';

class Slim {
    seq_pag_id: number;
    page_sort_order: number;
}

@Component({
    selector: 'test-page',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'app/components/test-page/test-page.html'
})
export class TestPageComponent implements OnInit {

    responseData: string[] = new Array<string>();

    sortedSurveyRenderingElements: Sre[];
    sortedUniquePages: SurveyPageSre[];

    constructor(
        //private _loadJsonDataService: LoadJsonDataService
        private _loadDomainOptionsService: LoadDomainOptionsService
    ) {
    }

    ngOnInit() {
        var test = this._loadDomainOptionsService.getDomainOptions(15);

        console.log(JSON.stringify(test));
    }

    click() {
    }

}


// xyzzy Look at thiscode from Henry later - it's likely a better solution
// // find unique page numbers
// var foca_monad = _.chain(sre).map(r => { return r.sre_foca_id; }).uniq();
// var foca_uniq_array = foca_monad.value();
// this.responseData = foca_uniq_array.toString();
