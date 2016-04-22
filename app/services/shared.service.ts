import { Injectable } from 'angular2/core';

import { QUESTIONS } from '../../app/seed-data/json-questions';
import { DomainOptions } from  '../../../app/types/domainOptions';

@Injectable()
export class SharedService {
    domainOptions: DomainOptions;

  constructor() {
      this.init();
  }

    init() {
        // Should only fire once since Services are Singletons in Angular2
        this.domainOptions = new DomainOptions();
        this.domainOptions.populateWithData();
    }

     getDomainOptions() {
         return this.domainOptions;
     }


    // getQuestions() {
    //     return QUESTIONS;
    // }

    // getQuestionsForPage(page_Id: number) {
    //     return QUESTIONS.filter(i => i.page_id === page_Id);
    // }

}
