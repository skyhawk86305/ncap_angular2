import { Injectable } from 'angular2/core';

import { DomainOptions } from  '../../app/types/domain-options';

import { Question } from       '../../app/types/question';
import { QUESTIONS } from '../../app/seed-data/json-questions';

import { Tooltip } from       '../../app/types/tooltip';
import { TOOLTIPS } from '../../app/seed-data/json-tooltips';

import { MatrixElement } from '../../app/types/matrix-element';
import { MATRIXELEMENTS } from '../../app/seed-data/json-matrix-elements';


@Injectable()
export class SeedDataService {
    private _domainOptions: DomainOptions;
    private _questions: Question[];
    private _tooltips: Tooltip[];
    private _matrixElements: MatrixElement[];

    constructor() {
        this.init();
    }

    init() {
        // Should only fire once since Services are Singletons in Angular2
        this._domainOptions = new DomainOptions();
        this._domainOptions.populateWithData();

        this._questions = QUESTIONS;

        this._tooltips = TOOLTIPS;

        this._matrixElements = MATRIXELEMENTS;
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
    getMatrixElementForPage(question_id: number) {
        return this._matrixElements.filter(i => i.question_id === question_id);
    }
}
