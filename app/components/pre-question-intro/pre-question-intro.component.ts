import { Component, Input } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { QuestionNew } from       '../../../app/types/question-new';

import { UserInputService } from '../../../app/services/user-input.service';

@Component({
  selector: 'pre-question-intro',
  templateUrl: 'app/components/pre-question-intro/pre-question-intro.html'
})
export class PreQuestionIntroComponent {

  @Input() question: QuestionNew;

  constructor(
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
  }

}
