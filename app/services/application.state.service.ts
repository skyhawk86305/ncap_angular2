import { Injectable } from 'angular2/core';

import { UserInput } from  '../../app/types/user-input';

@Injectable()
export class ApplicationStateService {

    private _currentPage: number;
    private _totalPages: number;
    private _UserInput: UserInput[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this._currentPage = 1;

        this._UserInput = new Array<UserInput>();

        let dummy: UserInput = new UserInput();
        dummy.trackingKey = 'test1';
        dummy.entered_value = '1test';

        this._UserInput.push(dummy);
        dummy = new UserInput();
        dummy.trackingKey = 'test2';
        dummy.entered_value = '2test';
        this._UserInput.push(dummy);

    }

    getCurrentPage() {
        return this._currentPage;
    }

    getPercentageComplete() {
        let percentage: number = this._currentPage * this._totalPages * 100;
        percentage = Math.round(percentage);

        return percentage;
    }

    getUserInput() {
        return this._UserInput;
    }

}
