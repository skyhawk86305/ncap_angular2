import { Injectable } from 'angular2/core';

import { Question } from  '../../app/types/question';
import { QUESTIONS } from '../../app/seed-data/json-questions';

@Injectable()
export class SharedService {

    getQuestions() {
        return QUESTIONS;
    }

    getQuestionsForPage(page_Id: number) {
        return QUESTIONS.filter(i => i.page_id === page_Id);
    }

}

