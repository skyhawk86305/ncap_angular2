import { Component, Input } from 'angular2/core';
import { PageQuestion } from '../../../../app/types/database-data/page-question';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
  selector: 'section-title',
  templateUrl: 'app/components/question-level-elements/section-title/section-title.html'
})
export class SectionTitleComponent {

  @Input() question: PageQuestion;
  protected navigationSingleton = NavigationSingleton.instanceOf();
}
