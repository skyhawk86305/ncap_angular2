import { Component, Input } from 'angular2/core';
import { Question } from       '../../../app/types/question';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';

@Component({
  selector: 'section-title',
  templateUrl: 'app/components/section-title/section-title.html'
})
export class SectionTitleComponent {

  @Input() question: Question;

  constructor(
    
  ) {
  }

}
