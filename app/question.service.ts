import { Injectable } from 'angular2/core';

import { Question } from './question';
import { QUESTIONS } from './mock-questions';

@Injectable()
export class QuestionService {
  getQuestions() {
    return Promise.resolve(QUESTIONS);
  }

  getQuestion(pageId: number) {
    return Promise.resolve(QUESTIONS).then(
      questions => questions.filter(i => i.pageId === pageId)
    );
  }
}
