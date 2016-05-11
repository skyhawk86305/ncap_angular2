import { Component, Input } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { Question } from       '../../../app/types/question';

import { UserInputService } from '../../../app/services/user-input.service';

@Component({
  selector: 'pre-question-intro',
  templateUrl: 'app/components/pre-question-intro/pre-question-intro.html'
})
export class PreQuestionIntroComponent {

  @Input() question: Question;

  constructor(
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
  }

}
