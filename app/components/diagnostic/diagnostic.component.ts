import { Component, OnInit } from '@angular/core';

import { ApplicationStateService } from '../../../app/services/application-state.service';
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
        protected _applicationStateService: ApplicationStateService,
        private _userInputService: UserInputService
    ) {
    }

    ngOnInit() {
        this.data = this._userInputService.getAllUserInput();
        this.currentPage = this._applicationStateService.getCurrentPageNumber();
    }
}

