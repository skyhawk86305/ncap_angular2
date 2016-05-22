import { Component, Input, OnInit } from 'angular2/core';
import { tooltipDict } from '../../../../app/seed-data/tooltip_dict';

@Component({
  selector: 'tooltip',
  templateUrl: 'app/components/question-level-elements/tooltip/tooltip.html'
  , styleUrls: ['app/components/question-level-elements/tooltip/tooltip.css']
})
export class TooltipComponent implements OnInit {

  @Input() toolTipId: number;

  tooltipText: string;

  ngOnInit() {
    if (tooltipDict[this.toolTipId]) {
      this.tooltipText = tooltipDict[this.toolTipId].definition;
    } else {
      console.log('could not find entry for tooltip id ' + this.toolTipId);
    }
  }
}
