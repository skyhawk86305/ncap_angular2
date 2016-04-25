import { Injectable } from 'angular2/core';

import { UserInput } from  '../../app/types/user-input';

import { USERINPUT_SCENARIO1 } from  '../../app/seed-data-for-debugging/json-user-input-senario1';

@Injectable()
export class ApplicationStateService {

    private _currentPageNumber: number;
    private _totalPages: number;
    private _UserInput: UserInput[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this._currentPageNumber = 3;
        this._UserInput = new Array<UserInput>();
        //this._UserInput = USERINPUT_SCENARIO1; // Default User Input data to a known state
    }

    getCurrentPageNumber() {
        return this._currentPageNumber;
    }

    setPageNumber(pageNumber: number) {
        this._currentPageNumber = pageNumber;
    }

    getPercentageComplete() {
        let percentage: number = this._currentPageNumber * this._totalPages * 100;
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

    setUserInput(trackingKey: string, enteredValue: string) {
        // Is this item already in the array?
        let userInputEntry: UserInput = this._UserInput.find(i => i.trackingKey === trackingKey);
        if (!userInputEntry) {
            userInputEntry = new UserInput();
            userInputEntry.trackingKey = trackingKey;
            this._UserInput.push(userInputEntry);
        }

        userInputEntry.storedValue = enteredValue;
    }

    next() {
        this._currentPageNumber++;
    }

    back() {
        this._currentPageNumber--;
    }

}
