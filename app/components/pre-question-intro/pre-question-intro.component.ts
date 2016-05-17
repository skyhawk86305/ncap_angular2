import { Component, Input } from 'angular2/core';
import { DomainOption } from   '../../../app/types/domain-option';
import { PageQuestion } from '../../../app/types/database-data/page-question';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';

@Component({
  selector: 'pre-question-intro',
  templateUrl: 'app/components/pre-question-intro/pre-question-intro.html'
})
export class PreQuestionIntroComponent {

  @Input() question: PageQuestion;

  constructor(
    
  ) {
  }

  ngOnInit() {
  }

}
