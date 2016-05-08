import { Component, Input } from 'angular2/core';

import { DomainOption } from   '../../../app/types/domain-option';
import { QuestionNew } from       '../../../app/types/question-new';

import { UserInputService } from '../../../app/services/user-input.service';

@Component({
  selector: 'section-title',
  templateUrl: 'app/components/section-title/section-title.html'
})
export class SectionTitleComponent {

  @Input() question: QuestionNew;
  options: DomainOption[];

  constructor(
    private _userInputService: UserInputService
  ) {
  }

  ngOnInit() {
  }

}
