import { Component, Input } from 'angular2/core';
import { Domain } from   '../../../../app/types/database-data/domain';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
  selector: 'pre-question-intro',
  templateUrl: 'app/components/question-level-elements/pre-question-intro/pre-question-intro.html'
})
export class PreQuestionIntroComponent {

  @Input() question: PageQuestion;

  constructor(

  ) {
  }

  ngOnInit() {
  }

}
