import { Component, Input, OnInit } from 'angular2/core';

import { ApplicationStateService } from '../../../app/services/application.state.service';
import { LoadJsonDataService } from '../../../app/services/load.json.data.service';
import { UserInputService } from '../../../app/services/user.input.service';

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
        private _applicationStateService: ApplicationStateService,
        private _userInputService: UserInputService,
        private _loadJsonDataService: LoadJsonDataService
    ) {
    }

    ngOnInit() {
        let previousUserInput: UserInput = this._userInputService.getUserInput(this.question.tracking_key);
        if (previousUserInput) {
            this.hasConsent = (previousUserInput.storedValue === 'Y');
        }
    }

    next() {
        console.log('Clicked next');
        this._userInputService.setUserInput('initial_consent', 'Y');
        this._applicationStateService.next();
    }

    exit() {
        // xyzzy
        console.log('Clicked exit');
    }

}
