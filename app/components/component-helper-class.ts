import { PageQuestion } from '../../app/types/database-data/new/page-question';

export class ComponentHelperClass {
  static addTooltipIfNecessary(question: PageQuestion) {
    // Does the question contain a tooltip?
    if (question.question_text.indexOf('--TT') >= 0) {
      let position = question.question_text.indexOf('--TT');
      let workingText = question.question_text.substring(position + 4);

      workingText = workingText.replace(/--.*/, '');
      question.toolTipId = +workingText;

      // Remove --TT5-- etc from question text    
      question.question_text = question.question_text.replace(/--TT.*--/g, '');
    }
  }

}
