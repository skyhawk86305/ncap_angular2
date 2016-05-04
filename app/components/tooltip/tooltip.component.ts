import { Component, Input, OnInit } from 'angular2/core';

import { LoadJsonDataService } from '../../../app/services/load.json.data.service';

@Component({
  selector: 'tooltip',
  templateUrl: 'app/components/tooltip/tooltip.html'
  , styleUrls: ['app/components/tooltip/tooltip.css']
})
export class TooltipComponent implements OnInit {

  @Input() toolTipId: number;

  tooltipText: string;

  constructor(
    private _loadJsonDataService: LoadJsonDataService
  ) {
  }

  ngOnInit() {
    this._loadJsonDataService.getTooltipForId(this.toolTipId).then(data => {
      this.tooltipText = data.definition;
    }
    );
  }

}
