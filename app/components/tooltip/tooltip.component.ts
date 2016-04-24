import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { SharedService } from '../../../app/services/shared.service';

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
    //this.tooltipId = 42;
    this.tooltipText = 'plugh ' + this.toolTipId;
  }

}
