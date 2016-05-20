import { Component, Input } from 'angular2/core';
import { DomainOption } from   '../../../../app/types/database-data/new/domain-option';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { PageQuestion } from '../../../../app/types/database-data/new/page-question';

@Component({
  selector: 'pre-question-intro',
  templateUrl: 'app/components/_question-level-elements/pre-question-intro/pre-question-intro.html'
})
export class PreQuestionIntroComponent {

  @Input() question: PageQuestion;

  constructor(

  ) {
  }

  ngOnInit() {
  }

}
