import { Injectable } from 'angular2/core';

import { QUESTIONS } from '../../app/seed-data/json-questions';
import { DomainOptions } from  '../../app/types/domain-options';
import { Question } from       '../../app/types/question';
import { Tooltip } from       '../../app/types/tooltip';
import { TOOLTIPS } from '../../app/seed-data/json-tooltips';

@Injectable()
export class SharedService {
    private _domainOptions: DomainOptions;
    private _questions: Question[];
    private _tooltips: Tooltip[];

    constructor() {
        this.init();
    }

    init() {
        // Should only fire once since Services are Singletons in Angular2
        this._domainOptions = new DomainOptions();
        this._domainOptions.populateWithData();

        this._questions = QUESTIONS;

        this._tooltips = TOOLTIPS;
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
}
