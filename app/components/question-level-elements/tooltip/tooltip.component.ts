import { Component, Input, OnInit } from 'angular2/core';
import { Tooltip } from '../../../types/tooltip';
import { tooltip } from '../../../seed-data/tooltip';

@Component({
  selector: 'tooltip',
  templateUrl: 'app/components/question-level-elements/tooltip/tooltip.html'
  , styleUrls: ['app/components/question-level-elements/tooltip/tooltip.css']
})
export class TooltipComponent implements OnInit {

  @Input() toolTipId: number;

  tooltipText: string;

  ngOnInit() {
    this.tooltipText = tooltip.find((i: Tooltip) => i.id === this.toolTipId).definition;
  }
}
