import { Component, Input } from '@angular/core';
import { Question } from       '../../../app/types/question';
import { UserInputService } from '../../../app/services/user-input.service';

@Component({
  selector: 'section-title',
  templateUrl: 'app/components/section-title/section-title.html'
})
export class SectionTitleComponent {

  @Input() question: Question;

  constructor(
    private _userInputService: UserInputService
  ) {
  }

}
