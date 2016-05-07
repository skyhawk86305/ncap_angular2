// ///<reference path="../../../typings/main/definitions/lodash/index.d.ts"/>

import { Component, OnInit} from 'angular2/core';
import { HTTP_PROVIDERS} from 'angular2/http';

import { sre } from '../../../app/seed-data/sre';
import { surveyPageSre } from '../../../app/seed-data/survey-page-sre';

import { Sre } from '../../../app/types/database-data/sre';
import { SurveyPageSre } from '../../../app/types/database-data/survey-page-sre';

import { AnswerCategory } from '../../../app/types/enums/answer-category';
import { FormatCategory } from '../../../app/types/enums/format-category';

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

    responseData: string;

    ngOnInit() {
        // // find unique page numbers
        // var foca_monad = _.chain(sre).map(r => { return r.sre_foca_id; }).uniq();
        // var foca_uniq_array = foca_monad.value();
        // this.responseData = foca_uniq_array.toString();


        // find unique page numbers + order by page id
        let uniquePageNumbersInOrder = _.orderBy(surveyPageSre, 'page_sort_order');
        uniquePageNumbersInOrder = _.sortedUniqBy(uniquePageNumbersInOrder, 'page_sort_order');

        let sortedSre: Sre[] = _.orderBy(sre, 'sre_sort_order');

        // Loop through pages, showing question number + text
        for (let curPage of uniquePageNumbersInOrder as SurveyPageSre[]) {

            // Get all entries for this page
            let questions = _.filter(surveyPageSre, { page_sort_order: curPage.page_sort_order });

            for (let curQuestion of questions as SurveyPageSre[]) {
                let surveyRenderingElement: Sre = _.find(sortedSre, { obj_uid: curQuestion.seq_sre_uid });

                //let questionsOnPage = _.filter(sortedSre, (item) => { item.obj_uid === curPage.seq_sre_uid });
                //questionsOnPage = _.orderBy(surveyPageSre, 'sre_sort_order');

                //tracking_key
                //sre_foca_id
                //sre_anca_id

                if (surveyRenderingElement) {
                    let displayValue = surveyRenderingElement.txt_parent_lang1 ? surveyRenderingElement.txt_legalrep_lang1 : surveyRenderingElement.tracking_key;
                    console.log(curPage.seq_pag_id + '.' + curQuestion.sre_sort_order + ' ' +
                    AnswerCategory[surveyRenderingElement.sre_anca_id] + ' ' +
                    FormatCategory[surveyRenderingElement.sre_foca_id] + ' ' +
                    displayValue + ' ' );
                } else {
                    // log this
                    console.log("*** No SRE found for obj_uid " + curQuestion.seq_sre_uid);
                }

            }
        }
    }

    click() {
    }

}
