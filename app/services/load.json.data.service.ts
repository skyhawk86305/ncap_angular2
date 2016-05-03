import { Injectable } from 'angular2/core';

import { DomainOptions } from  '../../app/types/domain-options';
import { MatrixElement } from '../../app/types/matrix-element';
import { Question } from       '../../app/types/question';
import { Tooltip } from       '../../app/types/tooltip';

import { QUESTIONS_JSON } from '../../app/seed-data/questions.json';
import { TOOLTIPS_JSON } from '../../app/seed-data/tooltips.json';
import { MATRIX_ELEMENTS_JSON } from '../../app/seed-data/matrix-elements.json';

import { ValidationService } from './validation.service';

@Injectable()
export class LoadJsonDataService {
    private _domainOptions: DomainOptions;
    private _questions: Question[];
    private _tooltips: Tooltip[];
    private _matrixElements: MatrixElement[];

    constructor(
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
        // Create an observable for each file
        

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

}
