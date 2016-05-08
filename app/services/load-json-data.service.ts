import { Injectable } from 'angular2/core';
import {Http} from 'angular2/http';

import { DomainOptions } from  '../../app/types/domain-options';
import { MatrixElement } from '../../app/types/matrix-element';
import { Question } from       '../../app/types/question';
import { QuestionNew } from       '../../app/types/question-new';

import { QUESTIONS_JSON } from '../../app/seed-data/questions.json';
import { MATRIX_ELEMENTS_JSON } from '../../app/seed-data/matrix-elements.json';

import { AnswerCategory } from '../../app/types/enums/answer-category';
import { FormatCategory } from '../../app/types/enums/format-category';

//import { AllDataBaseData } from '../types/database-data/all-database-data';

import { ValidationService } from './validation.service';

// The data
import { sre } from '../../app/seed-data/sre';
import { surveyPageSre } from '../../app/seed-data/survey-page-sre';
// Types to hold the data
import { Sre } from '../../app/types/database-data/sre';
import { SurveyPageSre } from '../../app/types/database-data/survey-page-sre';

import _ from 'lodash';

@Injectable()
export class LoadJsonDataService {
    BASE_PATH = 'app/seed-data/raw-json/';

    private _domainOptions: DomainOptions;
    private _questions: Question[];
    private _questionsNew: QuestionNew[] = new Array<QuestionNew>();
    private _matrixElements: MatrixElement[];

    constructor(
        private http: Http,
        private _validationService: ValidationService
    ) {
        // Should only fire once since Services are Singletons in Angular2
        this.init();
    }

    init() {
        // Old code
        this._domainOptions = new DomainOptions();
        this._domainOptions.populateWithData();
        //this._questions = JSON.parse(QUESTIONS_JSON);
        this._matrixElements = JSON.parse(MATRIX_ELEMENTS_JSON);

        // New code -using data from Database
        // find unique page numbers + order by page id
        let sortedUniquePages = _.orderBy(surveyPageSre, 'page_sort_order');
        sortedUniquePages = _.sortedUniqBy(sortedUniquePages, 'page_sort_order');
        let sortedSurveyRenderingElements = _.orderBy(sre, 'sre_sort_order');

        // Combine into one Question class for the app to use

        // Loop through pages, showing question number + text
        for (let curPage of sortedUniquePages as SurveyPageSre[]) {

            // Get all elements for this page (these elements link to Sre for the rest of the data)
            let curPageElements = _.filter(surveyPageSre, { page_sort_order: curPage.page_sort_order });
            let pageNumber = 1; // xyzzy5

            for (let curElement of curPageElements as SurveyPageSre[]) {
                let surveyRenderingElement: Sre = _.find(sortedSurveyRenderingElements, { obj_uid: curElement.seq_sre_uid });

                if (surveyRenderingElement) {
                    let question: QuestionNew = new QuestionNew();

                    question.obj_uid = surveyRenderingElement.obj_uid;
                    question.block = surveyRenderingElement.block;
                    question.parent_sre_disp_id = surveyRenderingElement.parent_sre_disp_id;
                    question.legalrep_sre_disp_id = surveyRenderingElement.legalrep_sre_disp_id;
                    question.selfreport_sre_disp_id = surveyRenderingElement.selfreport_sre_disp_id;
                    question.sre_foca_id = surveyRenderingElement.sre_foca_id;
                    question.sre_anca_id = surveyRenderingElement.sre_anca_id;
                    question.bypass_property = surveyRenderingElement.bypass_property;
                    question.higher_lvl_uid = surveyRenderingElement.higher_lvl_uid;
                    question.txt_parent_lang1 = surveyRenderingElement.txt_parent_lang1;
                    question.txt_legalrep_lang1 = surveyRenderingElement.txt_legalrep_lang1;
                    question.txt_selfreport_lang1 = surveyRenderingElement.txt_selfreport_lang1;
                    question.parent_sre_dona_id = surveyRenderingElement.parent_sre_dona_id;
                    question.legalrep_sre_dona_id = surveyRenderingElement.legalrep_sre_dona_id;
                    question.selfreport_sre_dona_id = surveyRenderingElement.selfreport_sre_dona_id;
                    question.tracking_key = surveyRenderingElement.tracking_key;
                    question.def_disp_value = surveyRenderingElement.def_disp_value;
                    question.parent_sre_varu_id = surveyRenderingElement.parent_sre_varu_id;
                    question.legalrep_sre_varu_id = surveyRenderingElement.legalrep_sre_varu_id;
                    question.selfreport_sre_varu_id = surveyRenderingElement.selfreport_sre_varu_id;
                    question.error_msg_lang1 = surveyRenderingElement.error_msg_lang1;
                    question.bypass_var = surveyRenderingElement.bypass_var;

                    question.page_id = curPage.seq_pag_id;

                    // xyzzy Temp hacks to get this data rendering

                    //question.sre_foca_id =
                    if (question.page_id === 1 ) {
                        question.sre_anca_id = pageNumber = 1 ? AnswerCategory.Home : AnswerCategory.Ignore;
                    }
                    if (question.page_id === 2) {
                        question.sre_anca_id = pageNumber = 1 ? AnswerCategory.Consent : AnswerCategory.Ignore;
                    }

                    question.question_id = pageNumber++;




                    this._questionsNew.push(question);

                    // let displayValue = (surveyRenderingElement.txt_parent_lang1 ?
                    //     surveyRenderingElement.txt_parent_lang1 : surveyRenderingElement.tracking_key);
                    // let summary: string = curPage.seq_pag_id + '.' + curElement.sre_sort_order + ' ' +
                    //     ' =' + FormatCategory[surveyRenderingElement.sre_foca_id] + '= ' +
                    //     ' =' + AnswerCategory[surveyRenderingElement.sre_anca_id] + '= ' +
                    //     displayValue + ' ';
                    // this.responseData.push(summary);
                    // console.log(summary);
                } else {
                    // log this
                    let summary: string = "*** No SRE found for obj_uid " + curElement.seq_sre_uid;
                    //this.responseData.push(summary);
                    console.log(summary);
                }

            }
        }



    }

    getDomainOptions() {
        return this._domainOptions;
    }

    getAllQuestions() {
        return this._questions;
    }

    getAllDatabaseQuestionsData() {
        return this._questionsNew;
    }

    getQuestionsForPage(page_Id: number) {
        return this._questions.filter(i => i.page_id === page_Id);
    }

    // getTooltipForId(id: number) {
    //     return this.readJsonFilesPromiseAll().then(
    //         data => data.tooltips.find(i => i.id === id)
    //         );
    // }

    getMatrixElementsForQuestionId(question_id: number): MatrixElement[] {
        return this._matrixElements.filter(i => i.question_id === question_id);
    }
}
