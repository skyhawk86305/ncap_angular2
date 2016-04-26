import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { ApplicationStateService } from '../../../app/services/application.state.service';
import { SharedService } from '../../../app/services/shared.service';
import { Question } from       '../../../app/types/question';

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
        private _sharedService: SharedService
    ) {
    }

    ngOnInit() {
        //xyzzy
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
