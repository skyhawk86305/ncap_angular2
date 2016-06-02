import { Component, Input, OnInit } from 'angular2/core';
import { ICustomValidator} from '../../../../app/other-logic/i-custom-validator';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'residental-block',
  templateUrl: 'app/components/page-level/residental-block/residental-block.html',
  directives: [NavigationButtonsComponent]
})
export class ResidentalBlockComponent implements OnInit, ICustomValidator {

  @Input() pageId: number;
  protected navigationSingleton = NavigationSingleton.instanceOf();
  isPageValid: boolean = false;

  ngOnInit() {
    this.navigationSingleton.registerAsCustomValidator(this);
  }

  ngAfterContentInit() {
    console.log('In residental block. Page Id: ' + this.pageId);
    // Hack to stop the weird error showing in Diagnostics mode
    //setTimeout(() => UserInputSingleton.instanceOf().setUserInput(this.question.tracking_key, 'Residental block is WIP'), 100);
  }

  customValidate() {
    return this.isPageValid;
  }

}
