import { Component, Input, OnInit } from 'angular2/core';
import { tooltipDict } from '../../../../app/seed-data/tooltip_dict';

interface Element {
  tooltip: boolean;
  tooltipId: number;
  data: string;
}

@Component({
  selector: 'html-including-tooltips',
  templateUrl: 'app/components/other/html-including-tooltips/html-including-tooltips.html'
  , styleUrls: ['app/components/other/html-including-tooltips/html-including-tooltips.css']
})
export class RenderHtmlStringIncludingTooltipsComponent implements OnInit {

  @Input() htmlToRender: string;

  elementsToRender: Array<Element>;
  TOOLTIP_LEFT_HTML: string = '<tooltip id="';
  TOOLTIP_RIGHT_HTML: string = '"/>';

  ngOnInit() {
    let remainingHtml: string = this.htmlToRender;
    this.elementsToRender = new Array<Element>();

    let infiniteLoopProtection = 0;
    while (infiniteLoopProtection++ < 10 && remainingHtml.indexOf(this.TOOLTIP_LEFT_HTML) > -1) {
      infiniteLoopProtection++;
      let leftHtml = remainingHtml.substring(0, remainingHtml.indexOf(this.TOOLTIP_LEFT_HTML));
      let tooltipIdText = remainingHtml.substring(remainingHtml.indexOf(this.TOOLTIP_LEFT_HTML)
        + this.TOOLTIP_LEFT_HTML.length, remainingHtml.indexOf(this.TOOLTIP_RIGHT_HTML));
      let tooltipId: number = +tooltipIdText;

      this.elementsToRender.push({ tooltip: false, tooltipId: -1, data: leftHtml });
      this.elementsToRender.push({ tooltip: true, tooltipId: tooltipId, data: '' });

      remainingHtml = remainingHtml.substring(remainingHtml.indexOf(this.TOOLTIP_RIGHT_HTML) + this.TOOLTIP_RIGHT_HTML.length);
    }

    this.elementsToRender.push({ tooltip: false, tooltipId: -1, data: remainingHtml });
  }

  getTooltipText(id: number) {
    let result: string = tooltipDict[id].definition;
    return result;
  }
}
