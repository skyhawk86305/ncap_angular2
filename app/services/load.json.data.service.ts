import { Injectable } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import { DomainOptions } from  '../../app/types/domain-options';
import { MatrixElement } from '../../app/types/matrix-element';
import { Question } from       '../../app/types/question';

import { QUESTIONS_JSON } from '../../app/seed-data/questions.json';
import { TOOLTIPS_JSON } from '../../app/seed-data/tooltips.json';
import { MATRIX_ELEMENTS_JSON } from '../../app/seed-data/matrix-elements.json';

import { SurveyPageSre } from '../types/database-data/survey-page-sre';
import { Subu } from '../types/database-data/subu';
import { Sre } from '../types/database-data/sre';
import { Tooltip } from '../types/database-data/tooltip';
import { DisplayCondition } from '../types/database-data/display-condition';
import { Domain } from '../types/database-data/domain';
import { Reference } from '../types/database-data/reference';

import { ValidationService } from './validation.service';

@Injectable()
export class LoadJsonDataService {
    display_conditions: DisplayCondition[];
    domains: Domain[];
    references: Reference[];
    sre: Sre[];
    subu: Subu[];
    survey_page_sre: SurveyPageSre[];
    tooltips: Tooltip[];

    private _domainOptions: DomainOptions;
    private _questions: Question[];
    private _tooltips: Tooltip[];
    private _matrixElements: MatrixElement[];

    constructor(
        private http: Http,
        private _validationService: ValidationService
    ) {
        this.init();
    }

    init() {
        // Should only fire once since Services are Singletons in Angular2
        this._domainOptions = new DomainOptions();
        this._domainOptions.populateWithData();

        this._questions = JSON.parse(QUESTIONS_JSON);
        this._tooltips = JSON.parse(TOOLTIPS_JSON);
        this._matrixElements = JSON.parse(MATRIX_ELEMENTS_JSON);

        // xyzzy5
        this.readJsonFiles();
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
        return this._tooltips.find(i => i.id === id);
    }

    getMatrixElementsForQuestionId(question_id: number): MatrixElement[] {
        return this._matrixElements.filter(i => i.question_id === question_id);
    }

    //     getMatrixElement(id: number) {
    //     return this._matrixElements.filter(i => i.id === id);
    // }

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
            this.http.get(BASE_PATH + 'survey_page_sre.json').map((res: Response) => res.json()),
            this.http.get(BASE_PATH + 'tooltips.json').map((res: Response) => res.json())
        ).subscribe(
            data => {
                let i = 0;
                that.display_conditions = data[i++];
                that.domains = data[i++];
                that.references = data[i++];
                that.sre = data[i++];
                that.subu = data[i++];
                that.survey_page_sre = data[i++];
                that.tooltips = data[i++];

                console.log(that.survey_page_sre[6].seq_pag_id);
                console.log(that.subu[6].subu_sort_order);
                console.log(that.sre[6].sre_anca_id);
                console.log(that.tooltips[1].definition);
                console.log(that.display_conditions[1].relation);
                console.log(that.domains[3].value);
                console.log(that.references[3].reference_txt);
            },
            err => console.error(err)
            );
    }
}
