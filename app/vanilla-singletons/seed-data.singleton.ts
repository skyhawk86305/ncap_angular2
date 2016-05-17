import { PageQuestion } from '../../app/types/database-data/page-question';
import { AnswerCategory } from '../../app/types/enums/answer-category.enum';
import { ValidationType } from '../../app/types/enums/validation-type.enum';
// The data
import { sre } from '../../app/seed-data/sre';
import { surveyPageSre } from '../../app/seed-data/survey-page-sre';
// Types to hold the data
import { Sre } from '../../app/types/database-data/sre';
import { SurveyPageSre } from '../../app/types/database-data/survey-page-sre';

import { SeedDataPageQuestions } from '../types/database-data/page-questions';
import { pageQuestionDict } from '../../app/seed-data/page_question_dict';

import _ from 'lodash';

export class SeedDataSingleton {

    private static _instance: SeedDataSingleton = new SeedDataSingleton();

    public totalPages = -1;
    private _questions: PageQuestion[] = new Array<PageQuestion>();
    private _seedData: SeedDataPageQuestions;

    public static instanceOf(): SeedDataSingleton {
        return SeedDataSingleton._instance;
    }

    constructor() {
        // Will fire only once since this class is a Singleton
        this._seedData = pageQuestionDict; //xyzzy - move to 
        SeedDataSingleton._instance = this;
    }

    getAllQuestions() {
        return this._questions;
    }

    getQuestionsForPage(page_Id: number): PageQuestion[] {
        let tempResult = this._seedData[page_Id.toString()]; // Cast to PageQuestion[]
        let result: PageQuestion[] = new Array<PageQuestion>();

        for (let curItem of tempResult) {
            let newPageQuestion = curItem as PageQuestion;
            console.log('sre_uid: ' + newPageQuestion.sre_uid);
            console.log('question_text: ' + newPageQuestion.question_text);
            newPageQuestion = <PageQuestion>curItem;
            console.log('sre_uid: ' + newPageQuestion.sre_uid);
            console.log('question_text: ' + newPageQuestion.question_text);
            result.push(newPageQuestion);
        }

        //return this._questions.filter(i => i.page_id === page_Id);
        return result;
    }

    // henry_db_related
    // This whole method should be relocated to the Node app which pre-processes data
    // Output one Question class for the app to use?
    // private OLD_preProcessData() {
    //     // Find unique page numbers + order by page id
    //     let sortedUniquePages = _.orderBy(surveyPageSre, 'page_sort_order');
    //     sortedUniquePages = _.sortedUniqBy(sortedUniquePages, 'page_sort_order');
    //     this.totalPages = sortedUniquePages.length;
    //     let sortedSurveyRenderingElements = _.orderBy(sre, 'sre_sort_order');

    //     // Loop through pages, showing question number + text
    //     for (let curPage of sortedUniquePages as SurveyPageSre[]) {

    //         // Get all elements for this page (these elements link to Sre for the rest of the data)
    //         let curPageElements = _.filter(surveyPageSre, { page_sort_order: curPage.page_sort_order });
    //         let pageNumber = 1; // xyzzy
    //         let elementNumber = 1; // xyzzy

    //         for (let curElement of curPageElements as SurveyPageSre[]) {
    //             let surveyRenderingElement: Sre = _.find(sortedSurveyRenderingElements, { obj_uid: curElement.seq_sre_uid });

    //             if (surveyRenderingElement) {
    //                 let question: PageQuestion = new Question();

    //                 question.obj_uid = surveyRenderingElement.obj_uid;
    //                 question.block = surveyRenderingElement.block;
    //                 question.parent_sre_disp_id = surveyRenderingElement.parent_sre_disp_id;
    //                 question.legalrep_sre_disp_id = surveyRenderingElement.legalrep_sre_disp_id;
    //                 question.selfreport_sre_disp_id = surveyRenderingElement.selfreport_sre_disp_id;
    //                 question.sre_foca_id = surveyRenderingElement.sre_foca_id;
    //                 question.sre_anca_id = surveyRenderingElement.sre_anca_id;
    //                 question.bypass_property = surveyRenderingElement.bypass_property;
    //                 question.higher_lvl_uid = surveyRenderingElement.higher_lvl_uid;
    //                 question.txt_parent_lang1 = surveyRenderingElement.txt_parent_lang1;
    //                 question.txt_legalrep_lang1 = surveyRenderingElement.txt_legalrep_lang1;
    //                 question.txt_selfreport_lang1 = surveyRenderingElement.txt_selfreport_lang1;
    //                 question.parent_sre_dona_id = surveyRenderingElement.parent_sre_dona_id;
    //                 question.legalrep_sre_dona_id = surveyRenderingElement.legalrep_sre_dona_id;
    //                 question.selfreport_sre_dona_id = surveyRenderingElement.selfreport_sre_dona_id;
    //                 question.tracking_key = surveyRenderingElement.tracking_key;
    //                 question.def_disp_value = surveyRenderingElement.def_disp_value;
    //                 question.parent_sre_varu_id = surveyRenderingElement.parent_sre_varu_id;
    //                 question.legalrep_sre_varu_id = surveyRenderingElement.legalrep_sre_varu_id;
    //                 question.selfreport_sre_varu_id = surveyRenderingElement.selfreport_sre_varu_id;
    //                 question.error_msg_lang1 = surveyRenderingElement.error_msg_lang1;
    //                 question.bypass_var = surveyRenderingElement.bypass_var;

    //                 question.page_id = curPage.seq_pag_id;

    //                 // xyzzy Temp hacks to deal with data we don't need
    //                 if (question.page_id === 1) {
    //                     question.sre_anca_id = pageNumber === 1 ? AnswerCategory.Home : AnswerCategory.Skip;
    //                 }
    //                 if (question.page_id === 2) {
    //                     question.sre_anca_id = pageNumber === 1 ? AnswerCategory.Consent : AnswerCategory.Skip;
    //                 }

    //                 question.question_text = surveyRenderingElement.txt_parent_lang1; // xyzzy - need to handle all three categories 
    //                 question.question_text = question.question_text.replace(/\\'/g, '\''); // xyzzy fix text like child\'s etc
    //                 question.question_text = question.question_text.replace('<tooltip id="', '--TT').replace('"/>', '--'); // xyzzy

    //                 question.sort_order = elementNumber++;
    //                 question.question_id = pageNumber++;

    //                 switch (surveyRenderingElement.bypass_property) {
    //                     case 'REQUIRED':
    //                         question.validation_type = ValidationType.required;
    //                         break;
    //                     case 'REQUESTED':
    //                         question.validation_type = ValidationType.requested;
    //                         break;
    //                     case 'OPTIONAL':
    //                         question.validation_type = ValidationType.optional;
    //                         break;
    //                     default:
    //                         question.validation_type = ValidationType.notApplicable;
    //                 }

    //                 // Detect Residental Block
    //                 if (question.question_text.indexOf('Where did the child live from birth through') > -1) {
    //                     question.sre_anca_id = AnswerCategory.ResidentialBlock;
    //                 }
    //                 if (question.question_text.indexOf('Please include all addresses during this 1-year period, along with dates of residence') > -1) {
    //                     question.sre_anca_id = AnswerCategory.Skip;
    //                 }
    //                 if (question.question_text.indexOf('Where did the child\'s biological mother live for') > -1) {
    //                     question.sre_anca_id = AnswerCategory.Skip;
    //                 }
    //                 if (question.question_text.indexOf('Please include all addresses during this 2-year period') > -1) {
    //                     question.sre_anca_id = AnswerCategory.Skip;
    //                 }
    //                 if (question.question_text.indexOf('Where did the child\'s biological father live for') > -1) {
    //                     question.sre_anca_id = AnswerCategory.Skip;
    //                 }

    //                 if (question.question_text.indexOf('This row is to be deleted') > -1) {
    //                     question.sre_anca_id = AnswerCategory.Skip;
    //                 }

    //                 this._questions.push(question);

    //             } else {
    //                 let summary: string = '*** No SRE found for obj_uid ' + curElement.seq_sre_uid;
    //                 console.log(summary);
    //             }

    //         }
    //     }
    //}
}
