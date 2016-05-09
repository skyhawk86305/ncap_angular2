import { Component, OnInit } from 'angular2/core';

// import * as prettyjson from 'prettyjson';

import { ApplicationStateService } from '../../../app/services/application-state.service';
import { UserInputService } from '../../../app/services/user-input.service';
import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'diag',
    templateUrl: 'app/components/diagnostic/diagnostic.html'
})
export class DiagnosticComponent implements OnInit {
    applicationStateService: ApplicationStateService;
    currentPage: number;
    userInputMapJson: string;
    data: UserInput[];

    constructor(
        private _applicationStateService: ApplicationStateService,
        private _userInputService: UserInputService
    ) {
    }

    ngOnInit() {
        //        let text = prettyjson.render(this._applicationStateService);
        this.data = this._userInputService.getAllUserInput();
        //this.userInputMapJson = JSON.stringify();
        console.log(this.data);
        this.currentPage = this._applicationStateService.getCurrentPageNumber();
    }
}

