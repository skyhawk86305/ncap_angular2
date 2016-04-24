import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { SharedService } from '../../../app/services/shared.service';
import { Tooltip } from       '../../../app/types/tooltip';

@Component({
  selector: 'tooltip',
  templateUrl: 'app/components/tooltip/tooltip.html'
  , styleUrls: ['app/components/tooltip/tooltip.css']
})
export class TooltipComponent implements OnInit {

  @Input() toolTipId: number;

  tooltipText: string;

  constructor(
    private _router: Router,
    private _sharedService: SharedService
  ) {
  }

  ngOnInit() {
    let tooltip: Tooltip = this._sharedService.getTooltipForId(this.toolTipId);
    this.tooltipText = tooltip.definition;
  }

}
