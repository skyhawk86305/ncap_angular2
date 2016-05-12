import { Component, OnInit } from 'angular2/core';

import { ApplicationControllerService } from '../../../app/services/application-controller.service';
import { UserInputService } from '../../../app/services/user-input.service';
import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'diag',
    templateUrl: 'app/components/diagnostic/diagnostic.html'
})
export class DiagnosticComponent implements OnInit {
    currentPage: number;
    data: UserInput[];

    constructor(
        protected _applicationStateService: ApplicationControllerService,
        private _userInputService: UserInputService
    ) {
    }

    ngOnInit() {
        this.data = this._userInputService.getAllUserInput();
        this.currentPage = this._applicationStateService.getCurrentPageNumber();
    }
}

