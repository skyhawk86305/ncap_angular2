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

        userInputEntry.storedValue = enteredValue;
    }

}
