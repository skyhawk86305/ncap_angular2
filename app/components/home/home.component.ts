import { Component, Input } from 'angular2/core';

import { ApplicationControllerService } from '../../../app/services/application-controller.service';
import { UserInputSingleton } from '../../../app/services/vanilla-singleton/user-input.singleton';

import { Question } from       '../../../app/types/question';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html'
})
export class HomeComponent {

    @Input() question: Question;

    constructor(
        private _applicationStateService: ApplicationControllerService
    ) {
    }

    childclicked() {
        this.setTrackingValueAndMovePage('legalrep');
        return false; // tell the href in the anchor tag not to fire
    }

    adultClicked() {
        this.setTrackingValueAndMovePage('parent');
        return false; // tell the href in the anchor tag not to fire
    }

    selfClicked() {
        this.setTrackingValueAndMovePage('selfreport');
        return false; // tell the href in the anchor tag not to fire
    }

    private setTrackingValueAndMovePage(selectedOption: string) {
        UserInputSingleton.instanceOf().setUserInput('respondent_type', selectedOption);
        this._applicationStateService.next();
    }
}
