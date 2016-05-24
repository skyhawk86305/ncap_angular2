import { Component } from 'angular2/core';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';

@Component({
    selector: 'modify-user-input',
    templateUrl: 'app/components/diagnostic/modify-user-input/modify-user-input.html'
})
export class ModifyUserInputComponent {
    trackingKey: string;
    enteredValue: string;

    clicked(event: any) {
        //console.log(JSON.stringify(event));
        //console.log(this.trackingKey + ':' + this.enteredValue);
        UserInputSingleton.instanceOf().setUserInput(this.trackingKey, this.enteredValue);
    }
}
