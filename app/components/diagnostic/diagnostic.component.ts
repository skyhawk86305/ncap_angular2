import { Component, OnInit } from 'angular2/core';

import { ApplicationControllerService } from '../../../app/services/application-controller.service';
import { UserInputSingleton } from '../../../app/services/user-input.singleton';
import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'diag',
    templateUrl: 'app/components/diagnostic/diagnostic.html'
})
export class DiagnosticComponent implements OnInit {
    currentPage: number;
    data: UserInput[];

    constructor(
        protected _applicationStateService: ApplicationControllerService
    ) {
    }

    ngOnInit() {
        this.data = UserInputSingleton.getInstance().getAllUserInput();
        this.currentPage = this._applicationStateService.getCurrentPageNumber();
    }
}

