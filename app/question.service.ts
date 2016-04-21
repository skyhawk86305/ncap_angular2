import { Injectable } from 'angular2/core';

import { Question } from './question';
import { QUESTIONS } from './mock-questions';

@Injectable()
export class QuestionService {
  getQuestions() {
    return QUESTIONS;
  }

  getQuestion(pageId: number) {
    return QUESTIONS.filter(i => i.pageId === pageId);
  }
}
