import { Component, Input, OnInit } from 'angular2/core';

import { ApplicationControllerService } from '../../../app/services/application-controller.service';
import { SeedDataService } from '../../../app/services/seed-data.service';
import { UserInputSingleton } from '../../../app/services/user-input.singleton';

import { Question } from       '../../../app/types/question';
import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'consent',
    templateUrl: 'app/components/consent/consent.html'
})
export class ConsentComponent implements OnInit {

    @Input() question: Question;
    hasConsent: boolean = false;

    constructor(
        private _applicationStateService: ApplicationControllerService,
        private _loadJsonDataService: SeedDataService
    ) {
    }

    ngOnInit() {
        let previousUserInput: UserInput = UserInputSingleton.getInstance().getUserInput(this.question.tracking_key);
        if (previousUserInput) {
            this.hasConsent = (previousUserInput.storedValue === 'Y');
        }
    }

    next() {
        console.log('Clicked next');
        UserInputSingleton.getInstance().setUserInput('initial_consent', 'Y');
        this._applicationStateService.next();
    }

    exit() {
        // Todo
        console.log('Clicked exit');
    }

}
