import { Component, Input } from 'angular2/core';
import { PageQuestion } from '../../../../app/types/database-data/page-question';
import { RenderHtmlStringIncludingTooltipsComponent } from '../../other/html-including-tooltips/html-including-tooltips.component';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
  selector: 'level-one-question',
  templateUrl: 'app/components/question-level-elements/level-one-question/level-one-question.html',
  directives: [RenderHtmlStringIncludingTooltipsComponent]
})
export class LevelOneQuestionComponent {

  @Input() question: PageQuestion;
  public NavigationSingleton = NavigationSingleton; // Permit html to access Singleton

}
