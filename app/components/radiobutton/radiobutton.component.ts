import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { DomainOption } from   '../../../app/types/domain-option';
import { DomainOptions } from  '../../../app/types/domain-options';
import { Question } from       '../../../app/types/question';
import { TooltipComponent } from '../tooltip/tooltip.component';

import { SharedService } from '../../../app/services/shared.service';

@Component({
  selector: 'radio-buttons',
  templateUrl: 'app/components/radiobutton/radioButtons.html',
  directives: [TooltipComponent]

})
export class RadioButtonComponent implements OnInit {

  @Input() question: Question;
  options: DomainOption[];
  questionToolTipId: number = -1;

  constructor(
    private _router: Router,
    private _sharedService: SharedService
  ) {
  }

  ngOnInit() {
    let domainOptions: DomainOptions = this._sharedService.getDomainOptions();
    this.options = domainOptions.getDomainOption(this.question.answer_lookup);

    // Does the question contain a tooltip?
    if (this.question.question_text.indexOf('<tooltip') >= 0) {

      //xyzzy WIP - convert tooltip tags to --TT
      this.question.question_text = this.question.question_text.replace(/<tooltip.*="/i, '--TT');
      this.question.question_text = this.question.question_text.replace(/".>/i, '--');

      let position = this.question.question_text.indexOf('--TT');
      let workingText = this.question.question_text.substring(position + 4);

      workingText = workingText.replace(/--.*/, '');
      this.questionToolTipId = +workingText;

    }

  }

}
