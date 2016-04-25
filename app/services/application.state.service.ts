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
        //debugger;
        this._currentPage = 1;

        this._UserInput = new Array<UserInput>();

        // Temp test data
        // let dummy: UserInput = new UserInput();
        // dummy.trackingKey = 'test1';
        // dummy.entered_value = '1test';

        // this._UserInput.push(dummy);
        // dummy = new UserInput();
        // dummy.trackingKey = 'test2';
        // dummy.entered_value = '2test';
        // this._UserInput.push(dummy);
    }

    getCurrentPage() {
        return this._currentPage;
    }

    getPercentageComplete() {
        let percentage: number = this._currentPage * this._totalPages * 100;
        percentage = Math.round(percentage);

        return percentage;
    }

    getAllUserInput() {
        return this._UserInput;
    }

    getUserInput(trackingKey: string) {
        let item: UserInput = this._UserInput.find(i => i.trackingKey === trackingKey);

        return item;
    }

    addUserInput(trackingKey: string, enteredValue: string) {
        // Is this item already in the array?
        let userInputEntry: UserInput = this._UserInput.find(i => i.trackingKey === trackingKey);
        if (!userInputEntry) {
            userInputEntry = new UserInput();
            userInputEntry.trackingKey = trackingKey;
            this._UserInput.push(userInputEntry);
        }

        userInputEntry.entered_value = enteredValue;
    }

}
