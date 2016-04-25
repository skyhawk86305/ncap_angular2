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

    constructor(
        private _router: Router,
        private _applicationStateService: ApplicationStateService,
        private _sharedService: SharedService
    ) {
    }

    ngOnInit() {
        //xyzzy
    }

}
