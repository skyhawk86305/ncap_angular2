import { Injectable } from 'angular2/core';

import { DomainOptions } from  '../../app/types/domain-options';

import { Question } from       '../../app/types/question';
import { QUESTIONS_JSON } from '../../app/seed-data/questions.json';

import { Tooltip } from       '../../app/types/tooltip';
import { TOOLTIPS_JSON } from '../../app/seed-data/tooltips.json';

import { MatrixElement } from '../../app/types/matrix-element';
import { MATRIX_ELEMENTS_JSON } from '../../app/seed-data/matrix-elements.json';

import { ValidationResult } from '../../app/types/enums/validation-result.enum';

import { ValidationService } from './validation.service';

@Injectable()
export class SeedDataService {
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
    }

    // == Domain Options ==
    getDomainOptions() {
        return this._domainOptions;
    }

    // == Questions ==
    getQuestions() {
        return this._questions;
    }

    getQuestionsForPage(page_Id: number) {
        return this._questions.filter(i => i.page_id === page_Id);
    }

    // == Tooltips ==
    getTooltipForId(id: number) {
        return this._tooltips.find(i => i.id === id);
    }

    // == Matrix Elements ==
    getMatrixElementForQuestionId(question_id: number) {
        return this._matrixElements.filter(i => i.question_id === question_id);
    }

    //     getMatrixElement(id: number) {
    //     return this._matrixElements.filter(i => i.id === id);
    // }

}
