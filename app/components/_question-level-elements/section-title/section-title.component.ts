import { Component, Input } from 'angular2/core';
import { PageQuestion } from '../../../../app/types/database-data/new/page-question';

@Component({
  selector: 'section-title',
  templateUrl: 'app/components/_question-level-elements/section-title/section-title.html'
})
export class SectionTitleComponent {

  @Input() question: PageQuestion;
}
