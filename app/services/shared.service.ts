import { OnInit } from 'angular2/core';
import { Injectable } from 'angular2/core';

import { QUESTIONS } from '../../app/seed-data/json-questions';
import { DomainOptions } from  '../../../app/types/domainOptions';

@Injectable()
export class SharedService implements OnInit {
    domainOptions: DomainOptions;

    ngOnInit() {
        this.domainOptions = new DomainOptions();
        this.domainOptions.populateWithData();
    }

     getDomainOptions() {
        this.domainOptions = new DomainOptions();
        this.domainOptions.populateWithData();
         return this.domainOptions;
     }


    // getQuestions() {
    //     return QUESTIONS;
    // }

    // getQuestionsForPage(page_Id: number) {
    //     return QUESTIONS.filter(i => i.page_id === page_Id);
    // }

}
