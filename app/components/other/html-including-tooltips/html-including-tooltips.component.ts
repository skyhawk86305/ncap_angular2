import { Component, Input, OnInit } from 'angular2/core';
import { tooltipDict } from '../../../../app/seed-data/tooltip_dict';

@Component({
  selector: 'html-including-tooltips',
  templateUrl: 'app/components/other/html-including-tooltips/html-including-tooltips.html'
  , styleUrls: ['app/components/other/html-including-tooltips/html-including-tooltips.css']
})
export class RenderHtmlStringIncludingTooltipsComponent implements OnInit {

  @Input() htmlToRender: string;

  ngOnInit() {
    // if (tooltipDict[this.toolTipId]) {
    //   this.tooltipText = tooltipDict[this.toolTipId].definition;
    // } else {
    //   console.log('Could not find entry for tooltip id ' + this.toolTipId);
    // }
  }
}
