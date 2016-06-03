import { Component, Input, OnInit } from 'angular2/core';
import { ICustomValidator} from '../../../../app/other-logic/i-custom-validator';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'residential-block',
  templateUrl: 'app/components/page-level/residential-block/residential-block.html',
  directives: [NavigationButtonsComponent]
})
<<<<<<< HEAD
export class ResidentialBlockComponent {
=======
export class ResidentalBlockComponent implements OnInit, ICustomValidator {
>>>>>>> 11d940c06541a6e6cdd28cb3cf572f0003ee0447

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
