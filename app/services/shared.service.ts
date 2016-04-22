import { Injectable } from 'angular2/core';

import { QUESTIONS } from '../../app/seed-data/json-questions';
import { DomainOptions } from  '../../app/types/domain-options';
import { Question } from       '../../app/types/question';

@Injectable()
export class SharedService {
    private _domainOptions: DomainOptions;
    private _questions: Question[];

    constructor() {
        this.init();
    }

    init() {
        // Should only fire once since Services are Singletons in Angular2
        this._domainOptions = new DomainOptions();
        this._domainOptions.populateWithData();

        this._questions = QUESTIONS;
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
}
