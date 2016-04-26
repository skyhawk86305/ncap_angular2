import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { ApplicationStateService } from '../../../app/services/application.state.service';
import { SeedDataService } from '../../../app/services/seed.data.service';
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
        private _router: Router,
        private _applicationStateService: ApplicationStateService,
        private _sharedService: SeedDataService
    ) {
    }

    ngOnInit() {
        let previousUserInput: UserInput = this._applicationStateService.getUserInput(this.question.tracking_key);
        if (previousUserInput) {
            this.hasConsent = (previousUserInput.storedValue === 'Y');
        }
    }

    next() {
        console.log('Clicked next');
        this._applicationStateService.setUserInput('initial_consent', 'Y');
        this._applicationStateService.next();
    }

    exit() {
        // xyzzy
        console.log('Clicked exit');
    }

}
