import { Component, Input, OnInit } from 'angular2/core';
import { tooltip } from '../../../app/seed-data/tooltip';

@Component({
  selector: 'tooltip',
  templateUrl: 'app/components/tooltip/tooltip.html'
  , styleUrls: ['app/components/tooltip/tooltip.css']
})
export class TooltipComponent implements OnInit {

  @Input() toolTipId: number;

  tooltipText: string;

  ngOnInit() {

    this.tooltipText = tooltip[this.toolTipId - 1].definition;
  }

}
