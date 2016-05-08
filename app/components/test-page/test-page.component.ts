import { Component, OnInit} from 'angular2/core';
import { HTTP_PROVIDERS} from 'angular2/http';

import { sre } from '../../../app/seed-data/sre';
import { surveyPageSre } from '../../../app/seed-data/survey-page-sre';

import { Sre } from '../../../app/types/database-data/sre';
import { SurveyPageSre } from '../../../app/types/database-data/survey-page-sre';

import { AnswerCategory } from '../../../app/types/enums/answer-category';
import { FormatCategory } from '../../../app/types/enums/format-category';

import { LoadJsonDataService } from '../../../app/services/load-json-data.service';

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
        private _loadJsonDataService: LoadJsonDataService
    ) {
    }

    ngOnInit() {
        // find unique page numbers + order by page id
        //let sortedUniquePages = _.orderBy(surveyPageSre, 'page_sort_order');
        //sortedUniquePages = _.sortedUniqBy(sortedUniquePages, 'page_sort_order');
        //let sortedSurveyRenderingElements: Sre[] = _.orderBy(sre, 'sre_sort_order');

        //        let { sortedUniquePages, sortedSurveyRenderingElements } = this._loadJsonDataService.getAllDatabaseQuestionsData(); 

        this.sortedSurveyRenderingElements = this._loadJsonDataService.getAllDatabaseQuestionsData();

        // // Loop through pages, showing question number + text
        // for (let curPage of sortedUniquePages as SurveyPageSre[]) {

        //     // Get all elements for this page (these elements link to Sre for the rest of the data)
        //     let curPageElements = _.filter(surveyPageSre, { page_sort_order: curPage.page_sort_order });

        //     for (let curElement of curPageElements as SurveyPageSre[]) {
        //         let surveyRenderingElement: Sre = _.find(sortedSurveyRenderingElements, { obj_uid: curElement.seq_sre_uid });

        //         if (surveyRenderingElement) {
        //             let displayValue = (surveyRenderingElement.txt_parent_lang1 ?
        //                 surveyRenderingElement.txt_parent_lang1 : surveyRenderingElement.tracking_key);
        //             let summary: string = curPage.seq_pag_id + '.' + curElement.sre_sort_order + ' ' +
        //                 ' =' + FormatCategory[surveyRenderingElement.sre_foca_id] + '= ' +
        //                 ' =' + AnswerCategory[surveyRenderingElement.sre_anca_id] + '= ' +
        //                 displayValue + ' ';
        //             this.responseData.push(summary);
        //             console.log(summary);
        //         } else {
        //             // log this
        //             let summary: string = "*** No SRE found for obj_uid " + curElement.seq_sre_uid;
        //             this.responseData.push(summary);
        //             console.log(summary);
        //         }

        //     }
        // }
    }

    click() {
    }

}


// xyzzy Look at thiscode from Henry later - it's likely a better solution
// // find unique page numbers
// var foca_monad = _.chain(sre).map(r => { return r.sre_foca_id; }).uniq();
// var foca_uniq_array = foca_monad.value();
// this.responseData = foca_uniq_array.toString();
