import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { LoadJsonDataService } from '../../../app/services/load.json.data.service';
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
    private _loadJsonDataService: LoadJsonDataService
  ) {
  }

  ngOnInit() {
    let tooltip: Tooltip = this._loadJsonDataService.getTooltipForId(this.toolTipId);
    this.tooltipText = tooltip.definition;
  }

}
