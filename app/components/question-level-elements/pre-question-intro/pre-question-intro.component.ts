import { Component, Input } from 'angular2/core';
import { PageQuestion } from '../../../../app/types/database-data/page-question';
import { RenderHtmlStringIncludingTooltipsComponent } from '../../other/html-including-tooltips/html-including-tooltips.component';

@Component({
  selector: 'pre-question-intro',
  templateUrl: 'app/components/question-level-elements/pre-question-intro/pre-question-intro.html',
  directives: [RenderHtmlStringIncludingTooltipsComponent]
})
export class PreQuestionIntroComponent {

  @Input() question: PageQuestion;

}
