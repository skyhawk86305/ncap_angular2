import { Injectable } from 'angular2/core';
import {Http, Response} from 'angular2/http';

import { DomainOptions } from  '../../app/types/domain-options';
import { MatrixElement } from '../../app/types/matrix-element';
import { Question } from       '../../app/types/question';

import { QUESTIONS_JSON } from '../../app/seed-data/questions.json';
import { TOOLTIPS_JSON } from '../../app/seed-data/tooltips.json';
import { MATRIX_ELEMENTS_JSON } from '../../app/seed-data/matrix-elements.json';

import { AllDataBaseData } from '../types/database-data/all-database-data';
import { Tooltip } from '../types/database-data/tooltip';

import { ValidationService } from './validation.service';

@Injectable()
export class LoadJsonDataService {
    BASE_PATH = 'app/seed-data/raw-json/';

    allDataBaseDataPromise: Promise<AllDataBaseData>;
    allDataLoaded = false; // xyzzy - probalby don't need this? Maybe van use allDataBaseDataPromise?
    //private allDataBaseData: AllDataBaseData;

    private _domainOptions: DomainOptions;
    private _questions: Question[];
    private _matrixElements: MatrixElement[];

    constructor(
        private http: Http,
        private _validationService: ValidationService
    ) {
        // Should only fire once since Services are Singletons in Angular2
        this.init();
    }

    init() {
        this._domainOptions = new DomainOptions();
        this._domainOptions.populateWithData();

        this._questions = JSON.parse(QUESTIONS_JSON);
        this._matrixElements = JSON.parse(MATRIX_ELEMENTS_JSON);

        // xyzzy Revist this loading logic
        if (!this.allDataBaseDataPromise) {
            this.allDataBaseDataPromise = this.readJsonFilesPromiseAll();
        }
    }

    readJsonFilesPromiseAll(): Promise<AllDataBaseData> {
        if (!this.allDataBaseDataPromise) {
            let that = this;
            const BASE_PATH = 'app/seed-data/raw-json/';

            let promise1 = this.http.get(BASE_PATH + 'display_conditions.json').map((res: Response) => res.json()).toPromise();
            let promise2 = this.http.get(BASE_PATH + 'domains.json').map((res: Response) => res.json()).toPromise();
            let promise3 = this.http.get(BASE_PATH + 'references.json').map((res: Response) => res.json()).toPromise();
            let promise4 = this.http.get(BASE_PATH + 'sre.json').map((res: Response) => res.json()).toPromise();
            let promise5 = this.http.get(BASE_PATH + 'subu.json').map((res: Response) => res.json()).toPromise();
            let promise6 = this.http.get(BASE_PATH + 'survey_page_sre.json').map((res: Response) => res.json()).toPromise();
            let promise7 = this.http.get(BASE_PATH + 'tooltips.json').map((res: Response) => res.json()).toPromise();

            this.allDataBaseDataPromise = Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7])
                .then(
                data => {
                    let i = 0;
                    let dataCast: any[] = data;

                    let allDataBaseData: AllDataBaseData = new AllDataBaseData();
                    allDataBaseData = new AllDataBaseData();
                    allDataBaseData.displayConditions = dataCast[i++];
                    allDataBaseData.domains = dataCast[i++];
                    allDataBaseData.references = dataCast[i++];
                    allDataBaseData.sres = dataCast[i++];
                    allDataBaseData.subus = dataCast[i++];
                    allDataBaseData.surveyPageSres = dataCast[i++];
                    allDataBaseData.tooltips = dataCast[i++];
                    that.allDataLoaded = true;

                    return allDataBaseData;
                });
        }

        return this.allDataBaseDataPromise;
    }

    getDomainOptions() {
        return this._domainOptions;
    }

    getQuestions() {
        return this._questions;
    }

    getQuestionsForPage(page_Id: number) {
        return this._questions.filter(i => i.page_id === page_Id);
    }

    getTooltipForId(id: number) {
        return this.readJsonFilesPromiseAll().then(
            data => data.tooltips.find(i => i.id === id)
            );
    }

    getMatrixElementsForQuestionId(question_id: number): MatrixElement[] {
        return this._matrixElements.filter(i => i.question_id === question_id);
    }

    //     getMatrixElement(id: number) {
    //     return this._matrixElements.filter(i => i.id === id);
    // }

}

                // console.log(that.allDataBaseData.surveyPageSres[6].seq_pag_id);
                // console.log(that.allDataBaseData.subus[6].subu_sort_order);
                // console.log(that.allDataBaseData.sres[6].sre_anca_id);
                // console.log(that.allDataBaseData.tooltips[1].definition);
                // console.log(that.allDataBaseData.displayConditions[1].relation);
                // console.log(that.allDataBaseData.domains[3].value);
                // console.log(that.allDataBaseData.references[3].reference_txt);


    // getAllDataXyzzy(): Promise<AllDataBaseData> {
    //     if (!this.allDataBaseDataPromise) {
    //         this.allDataBaseDataPromise = this.readJsonFilesPromiseAll();
    //     }

    //     return this.allDataBaseDataPromise;
    // }

    // import {Observable} from 'rxjs/Rx';
    // readJsonFilesObservableForkJoin() {
    //     let that = this;

    //     Observable.forkJoin(
    //         this.http.get(this.BASE_PATH + 'display_conditions.json').map((res: Response) => res.json()),
    //         this.http.get(this.BASE_PATH + 'domains.json').map((res: Response) => res.json()),
    //         this.http.get(this.BASE_PATH + 'references.json').map((res: Response) => res.json()),
    //         this.http.get(this.BASE_PATH + 'sre.json').map((res: Response) => res.json()),
    //         this.http.get(this.BASE_PATH + 'subu.json').map((res: Response) => res.json()),
    //         this.http.get(this.BASE_PATH + 'survey_page_sre.json').map((res: Response) => res.json()),
    //         this.http.get(this.BASE_PATH + 'tooltips.json').map((res: Response) => res.json())
    //     ).subscribe(
    //         data => {
    //             let i = 0;
    //             that.allDataBaseData = new AllDataBaseData();
    //             that.allDataBaseData.displayConditions = data[i++];
    //             that.allDataBaseData.domains = data[i++];
    //             that.allDataBaseData.references = data[i++];
    //             that.allDataBaseData.sres = data[i++];
    //             that.allDataBaseData.subus = data[i++];
    //             that.allDataBaseData.surveyPageSres = data[i++];
    //             that.allDataBaseData.tooltips = data[i++];

    //             console.log(that.allDataBaseData.surveyPageSres[6].seq_pag_id);
    //             console.log(that.allDataBaseData.subus[6].subu_sort_order);
    //             console.log(that.allDataBaseData.sres[6].sre_anca_id);
    //             console.log(that.allDataBaseData.tooltips[1].definition);
    //             console.log(that.allDataBaseData.displayConditions[1].relation);
    //             console.log(that.allDataBaseData.domains[3].value);
    //             console.log(that.allDataBaseData.references[3].reference_txt);
    //         },
    //         err => console.error(err)
    //         );
    // }

    // tooltipsPromise: Promise<Tooltip[]>;
    // getTooltips(): Promise<Tooltip[]> {
    //     let that = this;

    //     if (!this.tooltipsPromise) {
    //         this.tooltipsPromise = this.http.get(this.BASE_PATH + 'tooltips.json')
    //             .map((res: Response) => res.json())
    //             .toPromise()
    //             .then(
    //             data => {
    //                 that.allDataBaseData = new AllDataBaseData();
    //                 that.allDataBaseData.tooltips = data;
    //                 console.log('Tooltips' + that.allDataBaseData.tooltips[1].definition);
    //                 return that.allDataBaseData.tooltips;
    //             });
    //     }

    //     return this.tooltipsPromise;
    // }
