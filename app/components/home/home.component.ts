import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { ApplicationStateService } from '../../../app/services/application.state.service';
import { SeedDataService } from '../../../app/services/seed.data.service';
import { Question } from       '../../../app/types/question';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html'
})
export class HomeComponent implements OnInit {

  @Input() question: Question;

    constructor(
        private _router: Router,
        private _applicationStateService: ApplicationStateService,
        private _seedDataService: SeedDataService
    ) {
    }

    ngOnInit() {
        //xyzzy
    }

    childclicked() {
        this.setTrackingValueAndMovePage('legalrep');
    }

    adultClicked() {
        this.setTrackingValueAndMovePage('parent');
    }

    selfClicked() {
        this.setTrackingValueAndMovePage('selfreport');
    }

    private setTrackingValueAndMovePage(selectedOption: string) {
        this._applicationStateService.setUserInput('respondent_type', selectedOption);
        this._applicationStateService.next();
    }
}
